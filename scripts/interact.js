const hre = require("hardhat");

async function main() {
  const contractAddress = "YOUR_CONTRACT_ADDRESS";

  const Contract = await hre.ethers.getContractFactory("IoTAuthLogging");
  const contract = await Contract.attach(contractAddress);

  console.log("Admin:", await contract.admin());
}
main();
