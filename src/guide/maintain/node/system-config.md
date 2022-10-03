# Commonly used ports

`palomad` uses the following TCP ports. Toggle their settings to fit your environment.

Most validators will only need to open the following port:

- `26656`: The default port for the P2P protocol. This port is used to 
  communicate with other nodes and must be open to join a network. However, 
  it does not have to be open to the public. For validator nodes, 
  [configuring `persistent_peers`](updates-and-additional.md#additional-settings) 
  and closing this port to the public is recommended.

Additional ports:

- `1317`: The default port for the Lite Client Daemon, which can be executed by 
  `palomad rest-server`. The LCD provides an HTTP RESTful API layer to allow 
  applications and services to interact with your `palomad` instance through RPC. 
  For usage examples, see [Paloma REST API](https://lcd.Paloma.dev/swagger/). 
  You don't need to open this port unless you have use for it.

- `26660`: The default port for interacting with the [Prometheus](https://prometheus.io) 
  database, which can be used to monitor the environment. In the default configuration, 
  this port is not open.

- `26657`: The default port for the RPC protocol. Because this port is used for 
  querying and sending transactions, it must be open for serving queries from 
  `palomad`.

::: danger Important 

Do not open port `26657` to the public unless you plan to run a public node.

:::
