require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-web3");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    rootstockTestnet: {
      url: "https://public-node.testnet.rsk.co",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  }
};
