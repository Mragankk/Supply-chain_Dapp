const { expect } = require("chai");

describe("ProductTracking", function () {
  let ProductTracking;
  let productTracking;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  before(async function () {
    ProductTracking = await ethers.getContractFactory("ProductTracking");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    productTracking = await ProductTracking.deploy();
  });

  describe("registerProduct", function () {
    it("should register a product", async function () {
      await productTracking.registerProduct(1, "Product 1", "Details 1");

      const productDetails = await productTracking.products(1);
      expect(productDetails.name).to.equal("Product 1");
      expect(productDetails.supplyChainDetails).to.equal("Details 1");
      expect(productDetails.manufacturer).to.equal(owner.address);
    });
  });

  describe("getProductDetails", function () {
    it("should return correct product details", async function () {
      await productTracking.registerProduct(2, "Product 2", "Details 2");

      const productDetails = await productTracking.getProductDetails(2);
      expect(productDetails.name).to.equal("Product 2");
      expect(productDetails.supplyChainDetails).to.equal("Details 2");
      expect(productDetails.manufacturer).to.equal(owner.address);
    });

    it("should revert for non-existing product", async function () {
      // Try to get details of a non-existing product (ID 999)
      await expect(productTracking.getProductDetails(999)).to.be.revertedWith("Product does not exist");
    });
  });
});
