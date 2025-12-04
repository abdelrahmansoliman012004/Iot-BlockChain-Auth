// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract IoTAuthLogging {

    address public admin;

    constructor() {
        admin = msg.sender;
    }

    struct Device {
        bool isRegistered;
        uint lastNonce;
    }

    mapping(address => Device) public devices;

    event DeviceRegistered(address device);
    event DeviceAuthenticated(address device, uint nonce);
    event DataRecorded(address device, bytes32 dataHash, uint timestamp);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin allowed");
        _;
    }

    modifier onlyRegistered() {
        require(devices[msg.sender].isRegistered, "Device not registered");
        _;
    }

    function registerDevice(address _device) external onlyAdmin {
        devices[_device].isRegistered = true;
        devices[_device].lastNonce = 0;
        emit DeviceRegistered(_device);
    }

    function authenticate(uint _nonce) external onlyRegistered {
        require(_nonce > devices[msg.sender].lastNonce, "Replay detected");
        devices[msg.sender].lastNonce = _nonce;

        emit DeviceAuthenticated(msg.sender, _nonce);
    }

    function recordData(bytes32 _dataHash, uint _timestamp) 
        external 
        onlyRegistered 
    {
        require(_timestamp <= block.timestamp + 10 minutes, "Invalid timestamp");
        emit DataRecorded(msg.sender, _dataHash, _timestamp);
    }
}
