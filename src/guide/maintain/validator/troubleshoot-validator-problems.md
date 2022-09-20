# Troubleshoot validator problems

Use this guide to solve the most common validator problems.

## Validator has 0 voting power

If your validator has 0 voting power, your validator has become auto-unbonded. 
On the mainnet, validators unbond when they do not vote on `9500` of the last `10000` 
blocks (`50` of the last `100` blocks on the testnet). Because blocks are proposed every 
~5 seconds, a validator that is unresponsive for ~13 hours (~4 minutes on testnet) 
become unbonded. This problem usually happens when your `palomad` process crashes.

To return the voting power back to your validator:

1. If `palomad` is not running, restart it:

   ```bash
   palomad start
   ```

2. Wait for your full node to reach the latest block, and run:

   ```bash
   palomad tx slashing unjail <Paloma> --chain-id=<chain_id> --from=<from>
   ```

   - `<Paloma>` is the address of your validator account.
   - `<name>` is the name of the validator account. To find this information, run `palomad keys list`.

   ::: danger

   If you don't wait for `palomad` to sync before running `unjail`, an error 
   message will inform you that your validator is still jailed.

   :::

3.  Check your validator again to see if your voting power is back:

   ```bash
   palomad status
   ```

   If your voting power is less than it was previously, you may have been slashed for downtime.

## `palomad` crashes because of too many open files

The default number of files Linux can open per process is `1024`. `palomad` is
known to open more than this amount, causing the process to crash.

1. Increase the number of open files allowed by running `ulimit -n 4096`.  

2. Restart the process with `palomad start`.

   If you are using `systemd` or another process manager to launch `palomad`, 
   you might need to configure them. The following  sample `systemd` file fixes 
   the problem:

   ```systemd
   # /etc/systemd/system/palomad.service
   [Unit]
   Description=Paloma Testnet Node
   After=network.target

   [Service]
   Type=simple
   User=ubuntu
   WorkingDirectory=/home/ubuntu
   ExecStart=/home/ubuntu/go/bin/palomad start
   Restart=on-failure
   RestartSec=3
   LimitNOFILE=4096

   [Install]
   WantedBy=multi-user.target
   ```
## `palomad` crashes because of memory fragmentation

Huge memory allocation can cause memory fragmentation issue. Temporal 
solution is just using small Wasm cache size like 50~100MB.

`v0.5.10+`:

```toml
contract-memory-cache-size = 100
```

`v0.5.7~v0.5.9`:

```toml
write-vm-memory-cache-size = 100
```

## The validator is not active

- The validator is jailed. To solve this problem, `unjail` the validator by running:

    `palomad tx slashing unjail <Paloma> --chain-id=<chain_id> --from=<from>`

- The validator is not in the active validator set. 
  Only the top 175 validators are in this set. To fix this problem, increase your total 
  stake to be larger than the 175th validator.
