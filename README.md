
# Supplychain dapp Project

It is a blockchain-based application that aims to enhance transparency, traceability, and efficiency within supply chain management processes.

## Pre-requisite
```
npm
Node JS (version >=18.0)
```
## Enivironment setup
```
sudo apt update
sudo apt install curl git
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```
## Installing Hardhat using npm inside a dir
- initialize an npm project
```
npm init
```
- Now installing Hardhat
```

npm install --save-dev hardhat
```
- In the same directory where hardhat is installed run for initializing hardhat
```
npx hardhat init
```

  ![image](https://github.com/Mragankk/supply-chain_dapp/assets/145200189/32884b60-3f36-42d8-9010-3fa3c901f4c5)

- Installing Hardhat
```
npm install --save-dev @nomicfoundation/hardhat-toolbox
```
- Initializing the Project
- Adding Hardhat Toolbox
Add the Hardhat Toolbox to your project.
- Modifying the Hardhat Configuration
Update the `hardhat.config.js` file to include the Hardhat Toolbox and specify the desired Solidity version.

```
require("@nomicfoundation/hardhat-toolbox");
module.exports = {
  solidity: "0.8.0",
};
```
- Compiling Contracts
set up the supplyChain.sol in contracts folder and 
Compile the contracts using the following command:
```
npx hardhat compile
```
  ![image](https://github.com/Mragankk/supply-chain_dapp/assets/145200189/509c1a45-f1ca-4ccb-afc3-9996a159c650)

- Testing contract
  To test our contract, we are going to use Hardhat Network, a local Ethereum network designed for development. It comes built-in with Hardhat, and it's used as the default network. use the command to test:
  ```
  npx hardhat test
  ```
![image](https://github.com/Mragankk/supply-chain_dapp/assets/145200189/5a29103c-3af7-4643-8cb5-77de90195171)

- Deploying Contracts
Now we have to configure the `hardhat.config.js` file

  ![image](https://github.com/Mragankk/supply-chain_dapp/assets/145200189/692d29c9-209e-4df1-b93e-9ab8e1337425)


  - Deploy contracts using Hardhat:
```
npx hardhat run --network <network_name> ignition/modules/deploy.js
```
Replace <network_name> with the name of the network you want to deploy to, such as sepolia or mainnet.

In this project's case:
```
npx hardhat run --network hardhat ignition/modules/deploy.js
```
Now you're ready to deploy your contracts using Hardhat!

