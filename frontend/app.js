let provider;
let contract;

window.addEventListener('load', async () => {
    // Connect to MetaMask
    const connectWalletBtn = document.getElementById('connect-wallet');
    connectWalletBtn.addEventListener('click', async () => {
        await connectWallet();
    });

    // Manufacturer option
    const manufacturerOptionBtn = document.getElementById('manufacturer-option');
    manufacturerOptionBtn.addEventListener('click', () => {
        console.log('Manufacturer button clicked');
        showManufacturerSection();
    });

    // Retailer option
    const retailerOptionBtn = document.getElementById('retailer-option');
    retailerOptionBtn.addEventListener('click', () => {
        console.log('Retailer button clicked');
        showRetailerSection();
    });

    // Initialize ethers provider
    provider = new ethers.providers.Web3Provider(window.ethereum);

    // Contract address and ABI
    const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    const contractABI = [
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
    ];

    // Instantiate the contract object
    contract = new ethers.Contract(contractAddress, contractABI, provider.getSigner());
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

// Function to show the manufacturer section
function showManufacturerSection() {
    console.log('Showing manufacturer section');
    document.getElementById('manufacturer-section').style.display = 'block';
    document.getElementById('retailer-section').style.display = 'none';
}

// Function to show the retailer section
function showRetailerSection() {
    console.log('Showing retailer section');
    document.getElementById('manufacturer-section').style.display = 'none';
    document.getElementById('retailer-section').style.display = 'block';
}

// Function to add a product
async function addProduct() {
    const productId = document.getElementById('product-id').value;
    const productName = document.getElementById('product-name').value;
    const supplyChainDetails = document.getElementById('supply-chain-details').value;

    try {
        const tx = await contract.registerProduct(productId, productName, supplyChainDetails);
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

// Function to get product details
async function getProductDetails() {
    const productId = document.getElementById('product-id-retailer').value;

    try {
        const productDetails = await contract.getProductDetails(productId);
        console.log('Product Details:', productDetails);
    } catch (error) {
        console.error('Error getting product details:', error);
    }

    // Clear input field after getting product details
    document.getElementById('product-id-retailer').value = '';
}

