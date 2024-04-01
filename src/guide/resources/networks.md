# Active Paloma Networks

## Mainnet

 - Chain ID: `messenger`
 - Live since: February 8th, 2023
 - [Genesis file](https://raw.githubusercontent.com/palomachain/mainnet/master/messenger/genesis.json) 
 - [Address book](https://raw.githubusercontent.com/palomachain/mainnet/master/messenger/addrbook.json)
 - current tag for Paloma: [**v1.13.0**](https://github.com/palomachain/paloma/releases/tag/v1.13.0)
 - current tag for Pigeon: [**v1.11.0**](https://github.com/palomachain/pigeon/releases/tag/v1.11.0)


### Available endpoints
- LCD: lcd.palomachain.com
- RPC: https://rpc.palomachain.com (use port `443`  to connect local `palomad` instance to this node)

### Target chains 

All blockchains listed below are supported by Paloma's relay pigeons and allow for remote message execution.

|Target Chain|chain-ref-id|Chain Type|Compass Contract address|Status|
|------------|------------|----------|------------------------|------|
| BNB Chain mainnet| bnb-main | EVM | [0xB331Cc527a1F5fA6E7709131BE1fC82afb824DaB](https://bscscan.com/address/0xB331Cc527a1F5fA6E7709131BE1fC82afb824DaB) | Live |
| Ethereum Mainnet | eth-main | EVM | [0xB01cC20Fe02723d43822819ec57fCbadf31f1537](https://etherscan.io/address/0xB01cC20Fe02723d43822819ec57fCbadf31f1537) | Live |
| Polygon Mainnet | matic-main| EVM | [0xFb9265b59031B02e46f57BEe51D54103e5EDeF53](https://polygonscan.com/address/0xFb9265b59031B02e46f57BEe51D54103e5EDeF53) | Live |
| Optimism Mainnet | op-main  | EVM | [0xe6566872ACec5074361E992321C6F98d93f0042d](https://optimistic.etherscan.io/address/0xe6566872ACec5074361E992321C6F98d93f0042d) | Live |
| Base Mainnet | base-main |    EVM | [0x817F591aedBebb58a9118021Af3f0c7bF59F6C84](https://basescan.org/address/0x817F591aedBebb58a9118021Af3f0c7bF59F6C84) | Live |
| Gnosis Mainnet | gnosis-main | EVM | [0x8aB57eB10950564b9B24Fdf5a7aBd866Fb2F64ce](https://gnosisscan.io/address/0x8aB57eB10950564b9B24Fdf5a7aBd866Fb2F64ce) | Live |
| Arbitrum Mainnet | arbitrum-main | EVM | [0x05d7b3A021DAFA1A52Aef09B8057493847cb6800](https://arbiscan.io/address/0x05d7b3A021DAFA1A52Aef09B8057493847cb6800) | Live |
| Blast Mainnet | blast-main | EVM | [0x89Eb9f00498FFd5df9430426f2802dBa82D414b6](https://blastscan.io/address/0x89eb9f00498ffd5df9430426f2802dba82d414b6) | Live |


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
