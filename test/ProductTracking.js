const { expect } = require('chai');

describe('ProductTracking', function () {
  let ProductTracking;
  let productTracking;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    ProductTracking = await ethers.getContractFactory('ProductTracking');
    productTracking = await ProductTracking.deploy();
  });

  it('Should register a product', async function () {
    await productTracking.registerProduct(1, 'Product 1', 'Details 1');
    const product = await productTracking.products(1);
    expect(product.name).to.equal('Product 1');
    expect(product.supplyChainDetails).to.equal('Details 1');
    expect(product.manufacturer).to.equal(owner.address);
  });

  it('Should not register a product if already registered', async function () {
    await productTracking.registerProduct(1, 'Product 1', 'Details 1');
    await expect(productTracking.registerProduct(1, 'Product 2', 'Details 2'))
      .to.be.revertedWith('Product already registered');
  });

  it('Should get product details', async function () {
    await productTracking.registerProduct(1, 'Product 1', 'Details 1');
    const productDetails = await productTracking.getProductDetails(1);
    expect(productDetails.name).to.equal('Product 1');
    expect(productDetails.supplyChainDetails).to.equal('Details 1');
    expect(productDetails.manufacturer).to.equal(owner.address);
  });

  it('Should revert when getting details of non-existing product', async function () {
    await expect(productTracking.getProductDetails(1))
      .to.be.revertedWith('Product does not exist');
  });
});
