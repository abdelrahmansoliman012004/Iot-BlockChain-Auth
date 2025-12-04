const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("IoTAuthLogging", function () {
  let contract, admin, device;

  beforeEach(async () => {
    [admin, device] = await ethers.getSigners();

    const Contract = await ethers.getContractFactory("IoTAuthLogging");
    contract = await Contract.deploy();
    await contract.waitForDeployment();
  });

  it("Admin registers a device", async () => {
    await contract.registerDevice(device.address);
    const info = await contract.devices(device.address);
    expect(info.isRegistered).to.equal(true);
  });

  it("Device authenticates with nonce", async () => {
    await contract.registerDevice(device.address);
    await contract.connect(device).authenticate(1);
    const info = await contract.devices(device.address);
    expect(info.lastNonce).to.equal(1);
  });

  it("Should prevent replay attack", async () => {
    await contract.registerDevice(device.address);
    await contract.connect(device).authenticate(2);
    await expect(
      contract.connect(device).authenticate(1)
    ).to.be.revertedWith("Replay detected");
  });
});
