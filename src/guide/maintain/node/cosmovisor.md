# Setup
Cosmovisor enables you to download new binaries ahead of time and be completely (or close to completely) hands off during the chain halt upgrade time.

Comsmovisor expects certain environment variables and folder structure to be set.


1. Install Cosmovisor
go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.3.0

confirm the latest tag on the [Cosmos SDK github](https://github.com/cosmos/cosmos-sdk/releases)

2. Create the following required directories
```sh
mkdir -p ~/.paloma/cosmovisor
mkdir ~/.paloma/cosmovisor/genesis
mkdir ~/.paloma/cosmovisor/genesis/bin
mkdir ~/.paloma/cosmovisor/upgrades
```

3. Set the environment variables

Visit the [Cosmos SDK documentation](https://docs.cosmos.network/main/run-node/cosmovisor.html) for more information on the variables. 

```sh
cat <<EOT >> ~/.profile

# Setup Cosmovisor
export DAEMON_NAME=palomad
export DAEMON_HOME=$HOME/.paloma
export DAEMON_ALLOW_DOWNLOAD_BINARIES=false
export DAEMON_LOG_BUFFER_SIZE=512
export DAEMON_RESTART_AFTER_UPGRADE=true
export UNSAFE_SKIP_BACKUP=true
EOT

source ~/.profile
```

You may leave out UNSAFE_SKIP_BACKUP=true, however the backup takes a decent amount of time and space.

4. Copy the current binary into cosmovisor folder
```sh
which palomad
```

```sh
cp $GOPATH/palomad $DAEMON_HOME/cosmovisor/genesis/bin
```

## Upgrade 
mkdir -p ~/.paloma/cosmovisor/upgrades
