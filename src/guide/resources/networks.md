# Active Paloma Networks

## Mainnet

 - Chain ID: `tumbler`
 - Live since: April 22nd, 2024
 - [Genesis file](https://raw.githubusercontent.com/palomachain/mainnet/master/tumbler/genesis.json) 
 - [Address book](https://raw.githubusercontent.com/palomachain/mainnet/master/tumbler/addrbook.json)
 - current tag for Paloma: [**v1.13.3**](https://github.com/palomachain/paloma/releases/tag/v1.13.3)
 - current tag for Pigeon: [**v1.11.0**](https://github.com/palomachain/pigeon/releases/tag/v1.11.0)


### Available endpoints
- LCD: lcd.palomachain.com
- RPC: https://rpc.palomachain.com (use port `443`  to connect local `palomad` instance to this node)

### Target chains 

All blockchains listed below are supported by Paloma's relay pigeons and allow for remote message execution.

|Target Chain|chain-ref-id|Chain Type|Compass Contract address|Status|
|------------|------------|----------|------------------------|------|
| BNB Chain mainnet| bnb-main | EVM | [0x1876e5fA704039dfF7da0C66d516AFAcBe23c59B](https://bscscan.com/address/0x1876e5fA704039dfF7da0C66d516AFAcBe23c59B) | Live |
| Ethereum Mainnet | eth-main | EVM | [0x652Bf77d9F1BDA15B86894a185E8C22d9c722EB4](https://etherscan.io/address/0x652Bf77d9F1BDA15B86894a185E8C22d9c722EB4) | Live |
| Polygon Mainnet | matic-main| EVM | [0x10812c485BF5cE3c5296a9f603b53344a15cC0cD](https://polygonscan.com/address/0x10812c485BF5cE3c5296a9f603b53344a15cC0cD) | Live |
| Optimism Mainnet | op-main  | EVM | [0x56Bff1a8D2af62584D7Ebf123452b765392e20E3](https://optimistic.etherscan.io/address/0x56Bff1a8D2af62584D7Ebf123452b765392e20E3) | Live |
| Base Mainnet | base-main |    EVM | [0xB54E2c37645fd42F09C93B50B29648a9Cc4F6065](https://basescan.org/address/0xB54E2c37645fd42F09C93B50B29648a9Cc4F6065) | Live |
| Gnosis Mainnet | gnosis-main | EVM | [0x19Ef4434BcffE776D1Dcb4eA4872E5e76eF2034F](https://gnosisscan.io/address/0x19Ef4434BcffE776D1Dcb4eA4872E5e76eF2034F) | Live |
| Arbitrum Mainnet | arbitrum-main | EVM | [0x1F6dD66D5dFAB320266864F09c4a0497ee4b7818](https://arbiscan.io/address/0x1F6dD66D5dFAB320266864F09c4a0497ee4b7818) | Live |
| Blast Mainnet | blast-main | EVM | [0xa039cDb2eF436D754d507759A3f1afFcb9b28e36](https://blastscan.io/address/0xa039cDb2eF436D754d507759A3f1afFcb9b28e36) | Live |


::: tip 
Missing a chain? Anybody can submit a proposal to add an additional chain. Take a look at the [guidelines](https://forum.palomachain.com/t/how-to-create-a-paloma-improvement-proposal-or-pip/64) for submitting a proposal and [previous proposals](https://forum.palomachain.com/c/governance/6) submitted.
:::



## Testnet
 - Chain ID: `paloma-testnet-15`
 - Live since: January 20th, 2023
 - [Genesis file](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-15/genesis.json)
 - [Address book](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-15/addrbook.json)
 -  - current tag for Paloma: [**v1.13.0**](https://github.com/palomachain/paloma/releases/tag/v1.13.0)
 -   - current tag for Pigeon: [**v1.11.0**](https://github.com/palomachain/pigeon/releases/tag/v1.11.0)


### Available endpoints
- LCD: lcd.testnet.palomaswap.com
- rpc: https://testnet.palomaswap.com (use port `443` to connect local `palomad` instance to this node)


### Target chains 

All blockchains listed below are supported by Paloma's relay pigeons and allow for remote message execution.

|Target Chain|chain-ref-id|Chain Type|Compass Contract address|Status|
|------------|------------|----------|------------------------|------|
| BNB Chain mainnet | bnb-main | EVM | [0x898722A0d31c9dF6dD5db1a0ABa453949d30111E](https://bscscan.com/address/0x898722A0d31c9dF6dD5db1a0ABa453949d30111E) |Live|
| Polygon Mainnet | matic-main | EVM | [0xa52c3DdDF2b312FbBc8860aC9df77C0A60666305](https://polygonscan.com/address/0xa52c3DdDF2b312FbBc8860aC9df77C0A60666305)|Live|
| Ethereum Mainnet | eth-main | EVM | [0x4911920E9F354DbCA895CA4eE5F8f6E02d560996](https://etherscan.io/address/0x4911920E9F354DbCA895CA4eE5F8f6E02d560996) | Live |
| Optimism Mainnet | op-main  | EVM | [0xC137433e767bdDE473511B84df834e5D13389015](https://optimistic.etherscan.io/address/0xC137433e767bdDE473511B84df834e5D13389015) | Live |
| Gnosis Mainnet | gnosis-main | EVM | N/A | Deployment pending |
| Arbitrum Mainnet | arbitrum-main | EVM | [0xb2B78F9666D298d3EF42B22B9D0C21Ab0c80066C](https://arbiscan.io/address/0xb2B78F9666D298d3EF42B22B9D0C21Ab0c80066C) | Live |

::: tip 
Missing a chain? Anybody can submit a proposal to add an additional chain. Take a look at the [guidelines](https://forum.palomachain.com/t/how-to-create-a-paloma-improvement-proposal-or-pip/64) for submitting a proposal and [previous proposals](https://forum.palomachain.com/c/governance/6) submitted.
:::

### Deployed contracts 

|Code ID  |Description|
|-------|-----------| 
|  3  | CW721 base contract. Use this contract to instantiate your own [CW721](../../guide/develop/quick-start/paloma-py/cw721.md) NFT token|
|  4  | CW20 base contract. Use this contract to instantiate your own [CW20](../../guide/develop/quick-start/paloma-py/cw20.md) fungible token|
