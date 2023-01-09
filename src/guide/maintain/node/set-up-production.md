# Tips for a production level full-node

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

