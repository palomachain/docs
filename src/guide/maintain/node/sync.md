# Sync from Snapshot

After [joining a network](./join-a-network), your node will need to catch up to the current state of the blockchain which may take some time. You can significantly accelerate the synchronization process by providing `palomad` with a recent snapshot of the network state.

## Check Sync Status
To check if your node is all caught curl your node RPC endpoint

```
# Query via the RPC (default port: 26657)
curl http://localhost:26657/status | jq .result.sync_info.catching_up
```
If this command returns `true` then your node is still catching up. If it returns `false` then your node has caught up to the network current block.

You can also compare the block that your node is currently on against another source such as the [explorer](https://paloma.explorers.guru/blocks) to check on the progress of your node's sync via:
```
curl http://localhost:26657/status | jq .result.sync_info.latest_block_height 
```

## Available Snapshots
### Paloma Snapshot
Paloma makes snapshots available for download here [here.](https://download.palomachain.com/)

The archived snapshot contains the state and transactions of the network, which are stored in the ~./paloma/data/ folder by default. You should navigate exactly to the ~./paloma/ folder before proceeding to unpack it, or make sure that the contents of the archive are placed into ~./paloma/.


1. Stop Paloma if it's currently running and remove any existing data 
    ```
    service palomad stop 
    rm -rf ~/.paloma/data
    ```

2. Download and unpack the snapshot in the .paloma directory.
   ```
   cd ~/.paloma
   wget https://download.palomachain.com/testnet.paloma.snapshot.tar.gz
   tar -xf testnet.paloma.snapshot.tar.gz
   ```
   Due to the size of the network, this may take some time.  


3. After the snapshot is completely unpacked, start `palomad`:

   ```
   service palomad start
   ```

### NodeJumper Snapshots 
NodeJumper Validator also provides a snapshot to the community. See details and instructions on their [website.](https://nodejumper.io/paloma-testnet/sync)

## Sync faster during testing

Sometimes you may want to sync faster by foregoing checks. 
This command should only be used by advanced users in non-production 
environments. To speed up the sync process during testing, use the 
following command:

   ```bash
   palomad start --x-crisis-skip-assert-invariants
   ```