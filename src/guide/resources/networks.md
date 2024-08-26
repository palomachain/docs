# Active Paloma Networks

## Mainnet

 - Chain ID: `tumbler`
 - Live since: April 22nd, 2024
 - [Genesis file](https://raw.githubusercontent.com/palomachain/mainnet/master/tumbler/genesis.json) 
 - [Address book](https://raw.githubusercontent.com/palomachain/mainnet/master/tumbler/addrbook.json)
 - current tag for Paloma: [**v2.0.1**](https://github.com/palomachain/paloma/releases/tag/v2.0.1)
 - current tag for Pigeon: [**v2.1.0**](https://github.com/palomachain/pigeon/releases/tag/v2.1.0)


### Available endpoints
- LCD: lcd.palomachain.com
- RPC: https://rpc.palomachain.com (use port `443`  to connect local `palomad` instance to this node)

### Target chains 

All blockchains listed below are supported by Paloma's relay pigeons and allow for remote message execution.

|Target Chain|chain-ref-id|Chain Type|Compass Contract|Fee Manager|
|------------|------------|----------|------------------------|------|
| BNB Chain mainnet| bnb-main | EVM | [0x9d703...e8081](https://bscscan.com/address/0x9d703a2bE7ac576454fa310Aca1c667D1D5e8081) | [0x60192...8a04a](https://bscscan.com/address/0x60192927fa8c0e6aa5d1becde6b043817778a04a) |
| Ethereum Mainnet | eth-main | EVM | [0x4E749...4e596](https://etherscan.io/address/0x4E74982adB77496308f9c16e45966264D1A4e596) | [0x10670...1dcc9](https://etherscan.io/address/0x1067082fd0b74bfddfd5794e5ac0f24ed941dcc9) |
| Polygon Mainnet | matic-main| EVM | [0xEf4E2...66c48](https://polygonscan.com/address/0xEf4E24B1a9aAb82e7a0a2e238E7815Cd9A566c48) | [0x8a3b1...25eed](https://polygonscan.com/address/0x8a3b188e5b8f3ac0437cfb85db4ca1ee41225eed) |
| Optimism Mainnet | op-main  | EVM | [0xa9Ff4...BEF26](https://optimistic.etherscan.io/address/0xa9Ff4c11B1B5c898E2037063C8641fe5A1EBEF26) | [0x0b15c...d5fd9](https://optimistic.etherscan.io/address/0x0b15cd4f536c0c198bccfa69fd6eb5e8192d5fd9) |
| Base Mainnet | base-main |    EVM | [0x978A7...f6AA6](https://basescan.org/address/0x978A72B76ddDFD603b0261Adb4FB0D7Bb09f6AA6) | [0xde43b...377bb](https://basescan.org/address/0xde43bac3ddc0dfd71117ade93a92a2aa079377bb) |
| Gnosis Mainnet | gnosis-main | EVM | [0x75d8c...3F4f1](https://gnosisscan.io/address/0x75d8cC67A59d85Ea67A1E69d14De97Fe0173F4f1) | [0xcb48c...b5581](https://gnosisscan.io/address/0xcb48c27e69acfc2466941f71ff9e8530d53b5581) |
| Arbitrum Mainnet | arbitrum-main | EVM | [0x0E703...22e56](https://arbiscan.io/address/0x0E7039B63C57cDF92A22F4B78B04CAf125522e56) | [0xd8651...3ed34](https://arbiscan.io/address/0xd865124b3d9c67acdfb830bea4f3070a4123ed34) |
| Blast Mainnet | blast-main | EVM | [0x1Ce0e...41c47](https://blastscan.io/address/0x1Ce0eEDb82788982448D4E4F052Cf04B60741c47) | [0x621fa...86db8](https://blastscan.io/address/0x621fa57c7229d207d1d9b6deeb6c25b936d86db8) |


::: tip 
Missing a chain? Anybody can submit a proposal to add an additional chain. Take a look at the [guidelines](https://forum.palomachain.com/t/how-to-create-a-paloma-improvement-proposal-or-pip/64) for submitting a proposal and [previous proposals](https://forum.palomachain.com/c/governance/6) submitted.
:::



## Testnet
 - Chain ID: `paloma-testnet-16`
 - Live since: May 9th, 2024
 - [Genesis file](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-16/genesis.json)
 - [Address book](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-16/addrbook.json)
 - current tag for Paloma: [**v2.0.1**](https://github.com/palomachain/paloma/releases/tag/v2.0.1)
 - current tag for Pigeon: [**v2.1.0**](https://github.com/palomachain/pigeon/releases/tag/v2.1.0)


### Available endpoints
- LCD: lcd.testnet.palomaswap.com
- rpc: https://testnet.palomaswap.com (use port `443` to connect local `palomad` instance to this node)


### Target chains 

All blockchains listed below are supported by Paloma's relay pigeons and allow for remote message execution.

|Target Chain|chain-ref-id|Chain Type|Compass Contract|Fee Manager|
|------------|------------|----------|------------------------|------|
| Ethereum Mainnet | eth-main | EVM | [0x97cBf...0a0Fc](https://etherscan.io/address/0x97cBf57a763e874DbE9433DD7C809E86f680a0Fc) | [0xf62d5...b77dd](https://etherscan.io/address/0xf62d5ab8bb6378238c3e67e468809081ad8b77dd) |
| Arbitrum Mainnet | arbitrum-main | EVM | [0x375C0...9E360](https://arbiscan.io/address/0x375C07050a13d71110e5f058A4B3f9939a79E360) | [0xdc503...4d118](https://arbiscan.io/address/0xdc503ab31f8295cf87b09e151bf1f8fb6824d118) |

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