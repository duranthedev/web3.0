require ('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/TyzpKdv0_BqHMPOQP_4nVi3qBkuWuHTS',
      accounts: [ 'b3b6be626d2e644accce0c3aaf3b3f4c20be1bf91852a56ab51fa72655918e1a' ]
    }
  }
}