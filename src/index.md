---
home: true
actionText: Start messaging →
actionLink: /guide/introduction
features:
- title: Fast
  details: Paloma validators known as Pigeons manage RPC end-points on each target chain approved by Paloma governance. Their datacenter architecture, ensures fast consensus of observations of the target-blockchain's state changes. All validators must be fast relayers or risk being jailed, and their stake unbonded.
- title: Secure
  details: Paloma uses the Cosmos Peggy/Gravity validator-set security model. Messages on each target chain are secured by the signatures of the active-set of Paloma validator nodes. Paloma pigeons act as message senders and state watchers across all supported chains, ready to slash stake at any security model failures.  
- title: Easy to use
  details: Developers can write lightweight smart contracts in Cosmos's Cosmwasm that will send logic calls in the target chain language of choice. Paloma will handle target chain contract encoding, deployment and management.  
- title: Bidirectional
  details: Paloma messages can be sent and received from the target chains supported. This allows for advanced logic applications and low cost computation of new commands. New logic may execute based on observable target-chain state changes.
- title: Multi Chain Support
  details: Developers may write programs to target any Bitcoin, Cosmos-SDK chain, Ethereum Virtual Machine (EVM) L1 or L2 chain, Solana, Avalanche, as well as any Move VM chains.
- title: Gas fee management
  details: The Paloma network is an emergent, decentralized, gas fee oracle. This oracle network provides gas fee pricing on all target chains. Paloma developers can query gas costs for all supported target chains. Developers can also easily predict future gas prices for message delivery based on prior pigeon observations.
footer: © 2022 Columbidae Networks LTD (Caymans)
---