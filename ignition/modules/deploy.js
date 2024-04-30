async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const ProductTracking = await ethers.getContractFactory("ProductTracking");
  const productTracking = await ProductTracking.deploy();

  console.log("ProductTracking deployed to:", productTracking.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
