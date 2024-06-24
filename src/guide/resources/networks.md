# Active Paloma Networks

## Mainnet

 - Chain ID: `tumbler`
 - Live since: April 22nd, 2024
 - [Genesis file](https://raw.githubusercontent.com/palomachain/mainnet/master/tumbler/genesis.json) 
 - [Address book](https://raw.githubusercontent.com/palomachain/mainnet/master/tumbler/addrbook.json)
 - current tag for Paloma: [**v1.15.0**](https://github.com/palomachain/paloma/releases/tag/v1.15.0)
 - current tag for Pigeon: [**v1.12.1**](https://github.com/palomachain/pigeon/releases/tag/v1.12.1)


### Available endpoints
- LCD: lcd.palomachain.com
- RPC: https://rpc.palomachain.com (use port `443`  to connect local `palomad` instance to this node)

### Target chains 

All blockchains listed below are supported by Paloma's relay pigeons and allow for remote message execution.

|Target Chain|chain-ref-id|Chain Type|Compass Contract address|Status|
|------------|------------|----------|------------------------|------|
| BNB Chain mainnet| bnb-main | EVM | [0xb47247d125D87Cd15A69d041d009005AeC8bBf8b](https://bscscan.com/address/0xb47247d125D87Cd15A69d041d009005AeC8bBf8b) | Live |
| Ethereum Mainnet | eth-main | EVM | [0x2fE59ff4f13Ea42444B3BAB28Bdd69878d38010F](https://etherscan.io/address/0x2fE59ff4f13Ea42444B3BAB28Bdd69878d38010F) | Live |
| Polygon Mainnet | matic-main| EVM | [0x9b9F6842Bc2814CBc63fdB0850D06F4161d9183C](https://polygonscan.com/address/0x9b9F6842Bc2814CBc63fdB0850D06F4161d9183C) | Live |
| Optimism Mainnet | op-main  | EVM | [0x950AA3028F1A3A09D4969C3504BEc30D7ac7d6b2](https://optimistic.etherscan.io/address/0x950AA3028F1A3A09D4969C3504BEc30D7ac7d6b2) | Live |
| Base Mainnet | base-main |    EVM | [0x717c63f090AEAd8CdE9eFB0D34b0bde83F6947Fe](https://basescan.org/address/0x717c63f090AEAd8CdE9eFB0D34b0bde83F6947Fe) | Live |
| Gnosis Mainnet | gnosis-main | EVM | [0xfd4602B8D4d629AAC57427E4Fd014E2f4f4C3FF5](https://gnosisscan.io/address/0xfd4602B8D4d629AAC57427E4Fd014E2f4f4C3FF5) | Live |
| Arbitrum Mainnet | arbitrum-main | EVM | [0x2E68518cC9351843d11B3F41c08a63cd5B72Eb71](https://arbiscan.io/address/0x2E68518cC9351843d11B3F41c08a63cd5B72Eb71) | Live |
| Blast Mainnet | blast-main | EVM | [0xe99716d73fcb603e10f23b1bBC1e32d29da92f65](https://blastscan.io/address/0xe99716d73fcb603e10f23b1bBC1e32d29da92f65) | Live |


::: tip 
Missing a chain? Anybody can submit a proposal to add an additional chain. Take a look at the [guidelines](https://forum.palomachain.com/t/how-to-create-a-paloma-improvement-proposal-or-pip/64) for submitting a proposal and [previous proposals](https://forum.palomachain.com/c/governance/6) submitted.
:::



## Testnet
 - Chain ID: `paloma-testnet-16`
 - Live since: May 9th, 2024
 - [Genesis file](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-16/genesis.json)
 - [Address book](https://raw.githubusercontent.com/palomachain/testnet/master/paloma-testnet-16/addrbook.json)
 -  - current tag for Paloma: [**v1.15.0**](https://github.com/palomachain/paloma/releases/tag/v1.15.0)
 -   - current tag for Pigeon: [**v1.12.1**](https://github.com/palomachain/pigeon/releases/tag/v1.12.1)


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