# Treasury
The treasury module is the main module for Pigeon Feed that rewards validator pigeons for their relay services. Pigeon Feed consists of 3 fee types ([details below](#fees))
- Relayer Fee
- Community Fee
- Security Fee
and relayer selection is based on the validator pigeon's performance data. 

## Weight Settings
There are 5 performance metrics that relay selection is based on are
- relay fee
- validator uptime
- message delivery success Rate
- message execution time
- feature set
Description and calculation of these metrics are described in the [Metrix module.](./spec-metrix.md)

Each metric has a specific weight that determines how important the metric should be during relay pigeon selection. The weights are controlled by governance and are specific for each chain. See the [CLI command section](../palomad/subcommands-tx.md#gov-evm-propose-relay-weights) for more information on how to submit the proposoal. The current weights can be queried with `palomad q evm chains-infos` 

## Fees
Any Paloma user who wants to send a message needs to send a reward fee when sending a message. The fee can be claimed by the relayer at a later point. It is defined as a fractional value of the estimated gas costs of a transaction containing a message to be relayed. Relayers can set different fees on each target chain

The total fee describes the total amount of fees a user will have to pay for sending a message. It is made up like this:

`relayer_fee + community_fee + security_fee`


## Relayer fee
Fee settings are configured per chain, and stored as float point percentile representations of the total cost of a relayed transaction. For example, a relayer fee of 1.0 entitles the relayer to 100% of the estimated costs for a relayed transaction, whereas a fee setting of 1.15 entitles to a total of 115% of the costs, making a profit of 15%. These funds can later be claimed by directly interfacing with the Paloma bridge on remote chains.

In order for validator pigeons to stay eligible for relaying messages, they will need to set a fee value of at least 1.0. In order to become profitable, fee setting needs to be above 1.0. There are no other limits on which fees need to be set. The network will automatically chose relayers with lower fees based on the current [weight settings](#weight-settings) as defined by governance.

Example fee setup for Paloma main net
```bash
ADDRESS = <Operator Address>
FEE = <Fee setting> #e.g 1.1
palomad tx treasury upsert-relayer-fee arbitrum-main $FEE --from $ADDRESS --fees 250ugrain --gas auto --yes
palomad tx treasury upsert-relayer-fee base-main $FEE --from $ADDRESS --fees 250ugrain --gas auto --yes
palomad tx treasury upsert-relayer-fee blast-main $FEE --from $ADDRESS --fees 250ugrain --gas auto --yes
palomad tx treasury upsert-relayer-fee bnb-main $FEE --from $ADDRESS --fees 250ugrain --gas auto --yes
palomad tx treasury upsert-relayer-fee eth-main $FEE --from $ADDRESS --fees 250ugrain --gas auto --yes
palomad tx treasury upsert-relayer-fee gnosis-main $FEE --from $ADDRESS --fees 250ugrain --gas auto --yes
palomad tx treasury upsert-relayer-fee matic-main $FEE --from $ADDRESS --fees 250ugrain --gas auto --yes
palomad tx treasury upsert-relayer-fee op-main $FEE --from $ADDRESS --fees 250ugrain --gas auto --yes
```

### Community Fee
The community fee is set by governance on Paloma as a fraction of the `relayer_fee` . Users pay the community fee on top of the relayer fee when sending a message. The community fee is paid back into the community pool onto Paloma and will have to be bridged back every `n` hours.

## Security Fee
The security fee is set by governance on Paloma as a fraction of the `relayer_fee` . Users pay the security fee on top of the relayer fee when sending a message. The security fee is paid out to relayers who handle consensus messages such as the continuous valset updates that provide checkpoints of validator power on Compass-EVM.

