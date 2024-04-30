const contractAddress = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;
const contractABI = [[
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "supplyChainDetails",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "manufacturer",
          "type": "address"
        }
      ],
      "name": "ProductRegistered",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        }
      ],
      "name": "getProductDetails",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "supplyChainDetails",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "manufacturer",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "products",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "supplyChainDetails",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "manufacturer",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "productId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "supplyChainDetails",
          "type": "string"
        }
      ],
      "name": "registerProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]];

let productTrackingContract;

window.addEventListener('load', async () => {
    // Connect to MetaMask
    const connectWalletBtn = document.getElementById('connect-wallet');
    connectWalletBtn.addEventListener('click', async () => {
        await connectWallet();
    });

    // Manufacturer option
    const manufacturerOptionBtn = document.getElementById('manufacturer-option');
    manufacturerOptionBtn.addEventListener('click', () => {
        showManufacturerSection();
    });

    // Retailer option
    const retailerOptionBtn = document.getElementById('retailer-option');
    retailerOptionBtn.addEventListener('click', () => {
        showRetailerSection();
    });

    // Add product button
    const addProductBtn = document.getElementById('add-product');
    addProductBtn.addEventListener('click', async () => {
        await addProduct();
    });

    // Get product details button for retailer
    const getProductDetailsBtn = document.getElementById('get-product-details');
    getProductDetailsBtn.addEventListener('click', async () => {
        await getProductDetails();
    });

    // Initialize contract instance
    productTrackingContract = new ethers.Contract(contractAddress, contractABI, ethers.provider.getSigner());
});

async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Connected to MetaMask');
            document.getElementById('option-buttons').style.display = 'block';
        } catch (error) {
            console.error(error);
        }
    } else {
        console.error('MetaMask not installed');
    }
}

function showManufacturerSection() {
    document.getElementById('manufacturer-section').style.display = 'block';
    document.getElementById('retailer-section').style.display = 'none';
}

function showRetailerSection() {
    document.getElementById('manufacturer-section').style.display = 'none';
    document.getElementById('retailer-section').style.display = 'block';
}

async function addProduct() {
    const productId = document.getElementById('product-id').value;
    const productName = document.getElementById('product-name').value;
    const supplyChainDetails = document.getElementById('supply-chain-details').value;

    try {
        const tx = await productTrackingContract.registerProduct(productId, productName, supplyChainDetails);
        await tx.wait();
        console.log('Product added successfully');
    } catch (error) {
        console.error('Error adding product:', error);
    }

    // Clear input fields after adding product
    document.getElementById('product-id').value = '';
    document.getElementById('product-name').value = '';
    document.getElementById('supply-chain-details').value = '';
}

async function getProductDetails() {
    const productId = document.getElementById('product-id-retailer').value;

    try {
        const productDetails = await productTrackingContract.getProductDetails(productId);
        console.log('Product Details:', productDetails);
    } catch (error) {
        console.error('Error getting product details:', error);
    }

    // Clear input field after getting product details
    document.getElementById('product-id-retailer').value = '';
}
