# Set up a production environment

Use the following information to set up and manage your production-level 
full Paloma node.  

For information about running a validator node, visit the 
[validator guide](../validator/set-up-validator).

## Create a dedicated user

Although `palomad` does not require a super user account, during the 
setup process you'll need super user permission to create and modify 
some files. It is strongly recommended to use a normal user when 
running `palomad`.  

## Increase the maximum files `palomad` can open

`palomad` is set to open 1024 files by default. It is recommended 
that you increase this amount.

Modify `/etc/security/limits.conf`[*](https://linux.die.net/man/5/limits.conf) 
to increase the amount, where `nofile` is the number of files `palomad` can open.

```bash
# If you have never changed this system config or your system is fresh, most of this file will be commented
# ...
*                soft    nofile          65535   # Uncomment the following two lines at the bottom
*                hard    nofile          65535   # Change the default values to ~65535
# ...
```

# Run the server as a daemon

`palomad` must be running at all times. It is recommended that you 
register `palomad` as a `systemd` service so that it will be started 
automatically when the system reboots.

## Register `palomad` as a service

Create a service definition file in `/etc/systemd/system/palomad.service`.

**Example**:

```bash
[Unit]
Description=Paloma Daemon
After=network.target

[Service]
Type=simple
User=<Paloma_USER>
ExecStart=<PATH_TO_PalomaD>/palomad start  
Restart=on-abort

[Install]
WantedBy=multi-user.target

[Service]
LimitNOFILE=65535  
```

Modify the `Service` section according to your environment:

- Enter the user (likely your username, unless you created a user 
     specifically for `palomad`)
- Enter the path to the `palomad` executable. `<PATH_TO_PalomaD>` 
     is likely `/home/<YOUR_USER>/go/bin/palomad` or `/usr/go/bin`. 
     Confirm this with `whereis palomad`
- Make sure you made the correct edits to /etc/security/limits.conf


Run `systemctl daemon-reload` followed by `systemctl enable palomad`. 
This will register `palomad` as a system service and turn it on upon startup.

Now start the serivce with `systemctl start palomad`.

### Controlling the service

Use `systemd` to start, stop, and restart the service:

```bash
# Check health
systemctl status palomad
# Start
systemctl start palomad
# Stop
systemctl stop palomad
# Restart
systemctl restart palomad
```

### Access logs

Use `journalctl -t` to access entire logs, entire logs in reverse, 
and the latest and continuous log.

```bash
# Entire log reversed
journalctl -t palomad -r
# Entire log
journalctl -t palomad
# Latest and continuous
journalctl -t palomad -f
```
