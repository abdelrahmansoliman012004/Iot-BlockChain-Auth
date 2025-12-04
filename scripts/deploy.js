const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("IoTAuthLogging");
  const contract = await Contract.deploy();

  await contract.waitForDeployment();
  console.log("IoTAuthLogging deployed to:", await contract.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
