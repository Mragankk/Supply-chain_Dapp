
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

![Screenshot 2024-04-23 104834](https://github.com/Mragankk/supplychain_dapp/assets/145200189/06ac5459-194f-4528-959f-07ce42d65f9b)

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
  ![image](https://github.com/Mragankk/supplychain_dapp/assets/145200189/db8639d2-9f90-4432-a322-500484d7dbd3)

- Testing contract
  To test our contract, we are going to use Hardhat Network, a local Ethereum network designed for development. It comes built-in with Hardhat, and it's used as the default network. use the command to test:
  ```
  npx hardhat test
  ```
  ![image](https://github.com/Mragankk/supplychain_dapp/assets/145200189/866337f6-68c8-4ea5-883b-1613e5288422)

- Deploying Contracts
Now we have to configure the `hardhat.config.js` file

  ![image](https://github.com/Mragankk/supplychain_dapp/assets/145200189/41f97782-927e-4b17-a05c-3e95057c53f2)

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








# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
