require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
/** @type import('hardhat/config').HardhatUserConfig */
const NET_URL=process.env.NET_URL
const PRIVAT_KEY=process.env.PRIVAT_KEY
module.exports = {
  defaultNetwork:"hardhat",
  networks:{
    goerli:{
      url: NET_URL,
      accounts:[PRIVAT_KEY],
      chainId:5,
    },
  },
  solidity: "0.8.18",
};
