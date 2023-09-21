# Staking GRAIN tokens on Paloma

Delegating your tokens to validators of your choosing earns you a return on Paloma and ensures that your holdings don't lose value due to the inflation on the network. 

[The full list of active validators is here](https://paloma.explorers.guru/validators).

For the best security and control over your funds, we recommend [using a Ledger Hardware Wallet](./paloma-ledger.md). To delegate your tokens, you should ensure they are stored on your Ledger, and then follow these steps below: 

1. Confirm the amount you want to delegate to which [validator(s)](https://paloma.explorers.guru/validators). Help keep the network distributed by delegating to validators with lower stake.
2. Connect your ledger wallet if using. Also see the [Ledger instructions](./paloma-ledger.md).
3. Run the staking command for all validators that you're delegating to 
    
    i. Set variables for your parameters
    ```sh
    # address of the validator you're delegating to
    VALIDATOR=<palomavaloper...>  
    # amount you want to delegate to this validator in uGRAIN
    AMOUNT=<amount>ugrain 
    #this is the Volume node, but you may change this to another node
    NODE=https://rpc.palomachain.com:443 
    # your paloma wallet address from which you're delegating
    WALLET=<paloma...> 
    ```
    ii. Run the delegation command
    ```
    palomad tx staking delegate $VALIDATOR $AMOUNT \
    --chain-id messenger \
    --node $NODE \
    --fees 200ugrain --gas auto \
    --from $WALLET --ledger \
    --sign-mode "amino-json" -y
    ```