
const hre = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // console.log("Account balance:", (await deployer.getBalance()).toString());

  const UploadContract = await ethers.getContractFactory("UploadHash");
  const uploadhash = await UploadContract.deploy();

  console.log("Token address:", uploadhash.address);
  console.log("chainID address:", hre.network.config.chainId);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
