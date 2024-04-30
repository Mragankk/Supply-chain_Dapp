// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductTracking {
    struct Product {
        string name;
        string supplyChainDetails;
        address manufacturer;
    }

    mapping(uint256 => Product) public products;

    event ProductRegistered(uint256 indexed productId, string name, string supplyChainDetails, address manufacturer);

    function registerProduct(uint256 productId, string memory name, string memory supplyChainDetails) external {
        require(products[productId].manufacturer == address(0), "Product already registered");
        
        products[productId] = Product({
            name: name,
            supplyChainDetails: supplyChainDetails,
            manufacturer: msg.sender
        });

        emit ProductRegistered(productId, name, supplyChainDetails, msg.sender);
    }

    function getProductDetails(uint256 productId) external view returns (string memory name, string memory supplyChainDetails, address manufacturer) {
        require(products[productId].manufacturer != address(0), "Product does not exist");

        Product memory product = products[productId];
        return (product.name, product.supplyChainDetails, product.manufacturer);
    }
}
