🚀 IoT Blockchain Authentication & Data Logging

A secure, decentralized authentication and data integrity solution for IoT networks.

<p align="center"> <img src="https://dummyimage.com/800x250/1a1a1a/ffffff&text=Blockchain+IoT+Authentication" alt="banner"> </p> <p align="center"> <strong>Solidity • Hardhat • Ethereum • IoT Security • Event Logging</strong> </p> <p align="center"> <a href="#"> <img src="https://img.shields.io/badge/Solidity-0.8.x-363636?logo=solidity" /> </a> <a href="#"> <img src="https://img.shields.io/badge/Ethereum-Smart%20Contract-3C3C3D?logo=ethereum" /> </a> <a href="#"> <img src="https://img.shields.io/badge/Hardhat-Framework-yellow" /> </a> <a href="#"> <img src="https://img.shields.io/badge/Status-Active-brightgreen" /> </a> </p>

📌 Overview

This project implements a blockchain-based authentication and data logging framework tailored for IoT networks.
It ensures:

Secure device onboarding

Nonce-based authentication

Replay attack prevention

Tamper-proof data recording

Full transparency via events

Using the power of Ethereum smart contracts, this solution removes centralized trust points and guarantees data integrity across distributed IoT devices.

✨ Key Features
🔐 Admin-Controlled Device Registration

Only the admin can register IoT devices, preventing unauthorized device injection.

🔁 Secure Nonce-Based Authentication

Each authentication request uses an incremental nonce to prevent replay attacks.

🛡️ Replay Attack Protection

Reusing a previous nonce automatically rejects the request.

🧱 Immutable Data Logging

IoT devices can submit hashed sensor readings, permanently stored as blockchain events.

📢 Real-Time Transparency

All key actions—registration, authentication, data logging—are emitted as events and easily trackable.

🧰 Tech Stack
Layer	Technology
Smart Contract	Solidity 0.8.x
Testing & Deployment	Hardhat
Blockchain Network	Ethereum / Remix VM / Ganache
Client Interaction	Ethers.js / Web3.js
Optional Extensions	IPFS, Hardhat Scripts
📁 Project Structure
IoT-Blockchain-Auth/
│
├── contracts/
│   └── IoTAuthLogging.sol
│
├── scripts/
│   ├── deploy.js
│   └── interact.js
│
├── test/
│   └── IoTAuthLogging.test.js
│
├── hardhat.config.js
├── package.json
├── README.md
└── LICENSE

⚙️ Deployment (Hardhat)
1️⃣ Install dependencies
npm install

2️⃣ Compile
npx hardhat compile

3️⃣ Deploy locally
npx hardhat run scripts/deploy.js --network localhost

4️⃣ Run tests
npx hardhat test

📝 Contract Location

📌 contracts/IoTAuthLogging.sol

This contract includes:

Device registration

Authentication with nonces

Timestamp validation

Event-based logging


🔮 Future Enhancements

Integrate IPFS for off-chain sensor data

Add UI dashboard (React + Web3.js)

Migrate to Layer-2 (Polygon / Arbitrum) for cheaper gas

Add device revocation & block-list support

Zero-knowledge authentication for privacy

👥 Credits

Developed by:

Abdelrahman Mohamed
Karim Osama

🔥 Proudly built for the Blockchain Applications course (AAST)
