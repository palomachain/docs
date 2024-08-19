# Active Paloma Networks

## Mainnet

 - Chain ID: `tumbler`
 - Live since: April 22nd, 2024
 - [Genesis file](https://raw.githubusercontent.com/palomachain/mainnet/master/tumbler/genesis.json) 
 - [Address book](https://raw.githubusercontent.com/palomachain/mainnet/master/tumbler/addrbook.json)
 - current tag for Paloma: [**v2.0.0**](https://github.com/palomachain/paloma/releases/tag/v2.0.0)
 - current tag for Pigeon: [**v2.0.0**](https://github.com/palomachain/pigeon/releases/tag/v2.0.0)


### Available endpoints
- LCD: lcd.palomachain.com
- RPC: https://rpc.palomachain.com (use port `443`  to connect local `palomad` instance to this node)

### Target chains 

All blockchains listed below are supported by Paloma's relay pigeons and allow for remote message execution.

|Target Chain|chain-ref-id|Chain Type|Compass Contract address|Status|
|------------|------------|----------|------------------------|------|
| BNB Chain mainnet| bnb-main | EVM | [0x9d703a2bE7ac576454fa310Aca1c667D1D5e8081](https://bscscan.com/address/0x9d703a2bE7ac576454fa310Aca1c667D1D5e8081) | Live |
| Ethereum Mainnet | eth-main | EVM | [0x4E74982adB77496308f9c16e45966264D1A4e596](https://etherscan.io/address/0x4E74982adB77496308f9c16e45966264D1A4e596) | Live |
| Polygon Mainnet | matic-main| EVM | [0xEf4E24B1a9aAb82e7a0a2e238E7815Cd9A566c48](https://polygonscan.com/address/0xEf4E24B1a9aAb82e7a0a2e238E7815Cd9A566c48) | Live |
| Optimism Mainnet | op-main  | EVM | [0xa9Ff4c11B1B5c898E2037063C8641fe5A1EBEF26](https://optimistic.etherscan.io/address/0xa9Ff4c11B1B5c898E2037063C8641fe5A1EBEF26) | Live |
| Base Mainnet | base-main |    EVM | [0x978A72B76ddDFD603b0261Adb4FB0D7Bb09f6AA6](https://basescan.org/address/0x978A72B76ddDFD603b0261Adb4FB0D7Bb09f6AA6) | Live |
| Gnosis Mainnet | gnosis-main | EVM | [0x75d8cC67A59d85Ea67A1E69d14De97Fe0173F4f1](https://gnosisscan.io/address/0x75d8cC67A59d85Ea67A1E69d14De97Fe0173F4f1) | Live |
| Arbitrum Mainnet | arbitrum-main | EVM | [0x0E7039B63C57cDF92A22F4B78B04CAf125522e56](https://arbiscan.io/address/0x0E7039B63C57cDF92A22F4B78B04CAf125522e56) | Live |
| Blast Mainnet | blast-main | EVM | [0x1Ce0eEDb82788982448D4E4F052Cf04B60741c47](https://blastscan.io/address/0x1Ce0eEDb82788982448D4E4F052Cf04B60741c47) | Live |


::: tip 
Missing a chain? Anybody can submit a proposal to add an additional chain. Take a look at the [guidelines](https://forum.palomachain.com/t/how-to-create-a-paloma-improvement-proposal-or-pip/64) for submitting a proposal and [previous proposals](https://forum.palomachain.com/c/governance/6) submitted.
:::



## Testnet
 - Chain ID: `paloma-testnet-16`
 - Live since: May 9th, 2024
 - [Genesis file](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-16/genesis.json)
 - [Address book](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-16/addrbook.json)
 -  - current tag for Paloma: [**v2.0.0**](https://github.com/palomachain/paloma/releases/tag/v2.0.0)
 -   - current tag for Pigeon: [**v2.0.0**](https://github.com/palomachain/pigeon/releases/tag/v2.0.0)


### Available endpoints
- LCD: lcd.testnet.palomaswap.com
- rpc: https://testnet.palomaswap.com (use port `443` to connect local `palomad` instance to this node)


### Target chains 

All blockchains listed below are supported by Paloma's relay pigeons and allow for remote message execution.

|Target Chain|chain-ref-id|Chain Type|Compass Contract address|Status|
|------------|------------|----------|------------------------|------|
| Ethereum Mainnet | eth-main | EVM | [0x97cBf57a763e874DbE9433DD7C809E86f680a0Fc](https://etherscan.io/address/0x97cBf57a763e874DbE9433DD7C809E86f680a0Fc) | Live |
| Arbitrum Mainnet | arbitrum-main | EVM | [0x375C07050a13d71110e5f058A4B3f9939a79E360](https://arbiscan.io/address/0x375C07050a13d71110e5f058A4B3f9939a79E360) | Live |

::: tip 
Missing a chain? Anybody can submit a proposal to add an additional chain. Take a look at the [guidelines](https://forum.palomachain.com/t/how-to-create-a-paloma-improvement-proposal-or-pip/64) for submitting a proposal and [previous proposals](https://forum.palomachain.com/c/governance/6) submitted.
:::

<!---
### Deployed contracts 

|Code ID  |Description|
|-------|-----------| 
|  3  | CW721 base contract. Use this contract to instantiate your own [CW721](../../guide/develop/quick-start/paloma-py/cw721.md) NFT token|
|  4  | CW20 base contract. Use this contract to instantiate your own [CW20](../../guide/develop/quick-start/paloma-py/cw20.md) fungible token|
--->