# Cosmovisor

Cosmovisor enables you to download new binaries ahead of time and be completely (or close to completely) hands off during the chain halt upgrade time.

You'll need to set up some environment variables and folder structure in addition to the installation. 


## Setup
**1. Install Cosmovisor**
confirm the latest tag on the [Cosmos SDK github](https://github.com/cosmos/cosmos-sdk/releases?q=cosmovisor&expanded=true)

```
go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@`latest_tag`
```

**2. Create the following required directories**
```sh
mkdir -p ~/.paloma/cosmovisor
mkdir ~/.paloma/cosmovisor/genesis
mkdir ~/.paloma/cosmovisor/genesis/bin
mkdir ~/.paloma/cosmovisor/upgrades
```
The `~/.paloma/cosmovisor` directory has a `genesis` subfolder which contains the `palomad` version of when you first set up Cosmovisor. All subsequent `palomad` binary versions will be placed in inside the `upgrades` subfolder directory. Addittionaly, comsmovisor creates a `current` symlink to the currently active directory.

```text
.
├── current -> genesis or upgrades/{upgrade_tag_name}
├── genesis
│   └── bin
│       └── palomad
└── upgrades
    └── {upgrade_tag_name}
        ├── bin
        │   └── palomad
        └── upgrade-info.json
```
Please note that `~/.paloma/cosmovisor` only stores the `palomad` binaries. The `cosmovisor` binary itself is stored in any typical location (e.g. /usr/local/bin).


**3. Set the environment variables**

Visit the [official documentation](https://github.com/cosmos/cosmos-sdk/tree/cosmovisor/v1.3.0/cosmovisor) for more information on these variables. 

```bash
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

You may leave out `UNSAFE_SKIP_BACKUP=true`, however the backup takes a decent amount of time and space.


**4. Copy the current binary into cosmovisor folder**
```bash
cp /usr/local/bin/palomad $DAEMON_HOME/cosmovisor/genesis/bin
```

**5. Update the systemd service file**

You may want to change the description and you will need to u[date the `ExecStart` comment to reference the `cosmovisor` binary.

```sh{2,11}
[Unit]
Description=Paloma (Cosmovisor)
After=network-online.target

[Service]
LimitNOFILE=4096
Restart=always
RestartSec=5
WorkingDirectory=~
ExecStartPre=
ExecStart=/usr/local/go/bin/cosmovisor run start
Environment=PIGEON_HEALTHCHECK_PORT=5757
ExecReload=

[Install]
WantedBy=multi-user.target
~
```


## Upgrades 
When there is a new release for `palomad`, create a new directory that contains the new binary. You can do this as soon as the new binary is confirmed and available. 
```bash
mkdir -p ~/.paloma/cosmovisor/upgrades/`upgrade_tag_name`
```
Then get the new binary and copy it into the new directory.

```bash
wget -O - https://github.com/palomachain/paloma/releases/download/{upgrade_tag_name}/paloma_Linux_x86_64.tar.gz  | \
tar -C /usr/local/bin -xvzf - palomad

cp /usr/local/bin/palomad $DAEMON_HOME/cosmovisor/upgrades/`upgrade_tag_name`
```

That's it. At the chain halt upgrade time Cosmovisor will switch over to the new binary. 