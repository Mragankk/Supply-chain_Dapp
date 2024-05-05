async function main() {
  try {
    const { ethers } = require("hardhat");
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const ProductTracking = await ethers.getContractFactory("ProductTracking");
    console.log("Deploying ProductTracking contract...");
    const productTracking = await ProductTracking.deploy();

    await productTracking.waitForDeployment();

    console.log("ProductTracking deployed to:", productTracking.target);
  } catch (error) {
    console.error("Error deploying contract:", error);
    process.exit(1);
  }
}

main();
