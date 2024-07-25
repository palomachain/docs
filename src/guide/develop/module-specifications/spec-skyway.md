# Skyway

Skyway is the token bridge that allows to send any token between Paloma and any remote chain ([see currently available chains here](../../resources/networks.md#target-chains)). 

## Creating a new token 

Creating a new token requires two steps
1. Deploying the token from a blueprint contract.
2. Governance vote to set the token denom on Paloma.

Anyone can deploy a new token from the blueprint contract. There are currently the following blueprint contracts deployed. 

|Chain | Contract|
|------|---------| 
|Ethereum | [0xc05366AF6124D5a413916E4730BF7eEcaFEa7FB9](https://etherscan.io/address/0xc05366AF6124D5a413916E4730BF7eEcaFEa7FB9)|
|BNB      | [0x1Dd9c9BcfD203c1100e660076b713a401272a140](https://bscscan.com/address/0x1Dd9c9BcfD203c1100e660076b713a401272a140)|
|Polygon  | [0x1f576F2021b6EBdF229750f54fDFd31206141E65](https://polygonscan.com/address/0x1f576F2021b6EBdF229750f54fDFd31206141E65)|
|Optimism | [0x1f576F2021b6EBdF229750f54fDFd31206141E65](https://optimistic.etherscan.io/address/0x1f576F2021b6EBdF229750f54fDFd31206141E65)|
|Base     | [0x1f576F2021b6EBdF229750f54fDFd31206141E65](https://basescan.org/address/0x1f576F2021b6EBdF229750f54fDFd31206141E65)|
|Gnosis   | [0x14dBCf69DadA3e5A9aFC54a24fdd1467c2bbd346](https://gnosisscan.io/address/0x14dBCf69DadA3e5A9aFC54a24fdd1467c2bbd346)|
|Arbitrum | [0x7bee3e83b8519f1bd7510185f7c4d6ff866eb408](https://arbiscan.io/address/0x7bee3e83b8519f1bd7510185f7c4d6ff866eb408)|
|Blast    | [0x1f576f2021b6ebdf229750f54fdfd31206141e65](https://blastscan.io/address/0x1f576f2021b6ebdf229750f54fdfd31206141e65)|


Once the token contract is deployed on the EVM chain, a governance vote to set the denom on Paloma. For details on how to submit the proposal see the [ClI command section](../palomad/subcommands-tx#gov-submit-legacy-proposal-skyway-set-erc20-to-denom).


## Bridge Transfer Limit
Paloma’s Skyway Bridge has the option to have a transfer limit per token denom. The transfer limit aims to again protect validators by reducing the size of risk of unauthorized bridge tokens landing on target chains and impacting pools on which they depend for relay-fee refunds. The transfer limit is controlled by governance. For details on how to submit a proposals see the [ClI command section](../palomad/subcommands-tx.md#gov-submit-legacy-proposal-skyway-set-bridge-transfer-limit)

The design of the Paloma Bridge Daily Transfer Limits is as follows:
- Each vote to set a limit defines the token denom, limit period, token limit amount and list of exempt addresses
- The limit period must be one of: NONE, DAILY, WEEKLY, MONTHLY, YEARLY. Setting it to NONE effectively disables the limit.
- The limit period starts with block of the first transfer and will be converted to a block window.
- The limit applies to a token denom and all transfers from Paloma to any target chain. 
- Paloma keeps a counter of the number of tokens transferred and updates the count of tokens for each transfer. Transfers from exempt addresses do not count agains the limit.
- Before accepting any new transfer, the transferred token count is checked against the limit. If the new transfer puts the counter above the limit, the Paloma transaction will fail.
- There is no limit for token transfers from the remote chain to Paloma.

## Bridge Tax
If the bridge tax is set all outbound transactions from the bridge to the target EVM and other chains pay a tax on the skyway bridge. This tax is added to the cost of the transfer. The tax rate, as well as a list of tokens and addresses that are exempt from the bridge tax are controlled by governance. For details on how to submit a proposals see the [ClI command section](../palomad/subcommands-tx.md#gov-submit-legacy-proposal-skyway-set-bridge-tax)

### Tax Rate

The tax rate must be defined as a non-negative value, with 0 meaning no tax is applied.

The tax is added to the cost of the transfer and will stay locked until the transfer is finished. If the transfer is successful, the taxed amount is burned on the Paloma side. If a transfer is canceled before being executed, the full initial amount, plus tax, is refunded.

### Excluded Tokens
The governance vote can define a list of tokens that are excluded from the bridge tax. Transfers of these tokens will never pay the bridge tax and will be transferred in the full amount.

### Exempt Addresses
Similarly, the governance vote can define a list of addresses that are exempt from paying the bridge tax. Transfers from these senders will never pay bridge tax.