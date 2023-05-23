# Active Paloma Networks

## Mainnet

 - Chain ID: `messenger`
 - Live since: February 8th, 2023
 - [Genesis file](https://raw.githubusercontent.com/palomachain/mainnet/master/messenger/genesis.json) 
 - [Address book](https://raw.githubusercontent.com/palomachain/mainnet/master/messenger/addrbook.json)
 - current tag for Paloma: [**v1.0.0**](https://github.com/palomachain/paloma/releases/tag/v1.0.0)
 - current tag for Pigeon: [**v1.0.0**](https://github.com/palomachain/pigeon/releases/tag/v1.0.0)


### Available endpoints
- LCD: lcd.palomachain.com
- RPC: https://rpc.palomachain.com (use port `443`  to connect local `palomad` instance to this node)

### Target chains 

All blockchains listed below are supported by Paloma's relay pigeons and allow for remote message execution.

|Target Chain|chain-ref-id|Chain Type|Compass Contract address|Status|
|------------|------------|----------|------------------------|------|


::: tip 
Missing a chain? Anybody can submit a proposal to add an additional chain. Take a look at the [guidelines](https://forum.palomachain.com/t/how-to-create-a-paloma-improvement-proposal-or-pip/64) for submitting a proposal and [previous proposals](https://forum.palomachain.com/c/governance/6) submitted.
:::

### Deployed contracts 

|Code ID  |Description|
|-------|-----------| 



## Testnet
 - Chain ID: `paloma-testnet-15`
 - Live since: January 20th, 2023
 - [Genesis file](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-15/genesis.json)
 - [Address book](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-15/addrbook.json)
 -  - current tag for Paloma: [**v1.0.0**](https://github.com/palomachain/paloma/releases/tag/v1.0.0)
 -   - current tag for Pigeon: [**v1.0.0**](https://github.com/palomachain/pigeon/releases/tag/v1.0.0)


### Available endpoints
- LCD: lcd.testnet.palomaswap.com
- rpc: https://testnet.palomaswap.com (use port `443` to connect local `palomad` instance to this node)


### Target chains 

All blockchains listed below are supported by Paloma's relay pigeons and allow for remote message execution.

|Target Chain|chain-ref-id|Chain Type|Compass Contract address|Status|
|------------|------------|----------|------------------------|------|
|Binance Mainnet|`bnb-main`|EVM| [0xBE3AeB2953B6757AA7Eaf4c69a66D6316c98363e](https://bscscan.com/address/0xBE3AeB2953B6757AA7Eaf4c69a66D6316c98363e) |Live|
|Polygon Mainnet|`matic-main`|EVM|[0x18298C5424a6a63b679eC190E8421855D7184Dd4](https://polygonscan.com/address/0x18298C5424a6a63b679eC190E8421855D7184Dd4)|Live|

::: tip 
Missing a chain? Anybody can submit a proposal to add an additional chain. Take a look at the [guidelines](https://forum.palomachain.com/t/how-to-create-a-paloma-improvement-proposal-or-pip/64) for submitting a proposal and [previous proposals](https://forum.palomachain.com/c/governance/6) submitted.
:::

### Deployed contracts 

|Code ID  |Description|
|-------|-----------| 
|  3  | CW721 base contract. Use this contract to instantiate your own [CW721](../../guide/develop/quick-start/paloma-py/cw721.md) NFT token|
|  4  | CW20 base contract. Use this contract to instantiate your own [CW20](../../guide/develop/quick-start/paloma-py/cw20.md) fungible token|
