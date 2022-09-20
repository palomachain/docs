# Reset and troubleshooting

## Complete reset

Occasionally you may need to perform a comlpete reset of your 
node due to data corruption or misconfiguration. Resetting will 
remove all data in `~./paloma/data` and the addressbook in 
`~/.paloma/config/addrbook.json` and reset the node to genesis state. 

To perform a complete reset of your `palomad` state, use:

```
palomad unsafe-reset-all
```

Running this command successfully will produce the following log: 

```
[ INF ] Removed existing address book file=/home/user/.paloma/config/addrbook.json
[ INF ] Removed all blockchain history dir=/home/user./paloma/data
[ INF ] Reset private validator file to genesis state keyFile=/home/user/.paloma/config/priv_validator_key.json stateFile=/home/user./paloma/data/priv_validator_state.json
```

::: tip

After resetting, make sure the addressbook contains peer 
addresses and is in the correct spot. If not, 
download an adressbook and place it in `~/.paloma/config/`.

:::


### Change Genesis

To change the genesis version, delete `~/.paloma/config/genesis.json`.

You can recreate a genesis version via the following steps:

```bash
 palomad add-genesis-account $(palomad keys show <account-name> -a) 100000000ugrain,1000usd
 palomad gentx <account-name> 10000000ugrain --chain-id=<network-name> 
 palomad collect-gentxs
```

### Reset personal data

::: danger

You may be unable to use your node and its associated accounts after 
changing your personal data. Do not perform this action unless your node is disposable.

:::

To change your personal data to a completely pristine state, delete 
both `~/.paloma/config/priv_validator_state.json` and `~/.paloma/config/node_key.json`. 

### Node health

A healthy node will have the following files in place and populated:

- Addressbook `~/.paloma/config/addrbook.json`
- Genesis file `~/.paloma/config/genesis.json`
- Validator state  `~/.paloma/config/priv_validator_state.json`
- Node key `~/.paloma/config/node_key.json`

### Resync

You can proceed to [resync manually](sync.md) or [via quicksync](sync.md#quicksync). 
