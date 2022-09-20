# Install `palomad`

`palomad` is the command-line interface and daemon that connects to Paloma and enables you to interact with the Paloma blockchain. Paloma is the official Golang reference implementation of the Paloma node software.

This guide is for developers who want to install `palomad` and interact with Paloma without running a full node. If you want to run a full node or join a network, visit [](../../maintain/node/build-paloma-core).

### Prerequisites

- [Golang v1.18 linux/amd64](https://golang.org/doc/install)
- Ensure your `GOPATH` and `GOBIN` environment variables are set up correctly.
- Linux users: install [build-essential](http://linux-command.org/en/build-essential.html).

::: danger palomad for Mac

If you are using a Mac, follow the [`palomad` Mac installation guide](./palomad-mac.md).

:::

## From binary

The easiest way to install `palomad` and Paloma is by downloading a pre-built binary for your operating system. You can find the latest binaries on the [releases](https://github.com/palomachain/paloma/releases/latest) page. If you have a Mac, follow the [Mac installation instructions](./palomad-mac.md).

## From source

### 1. Get the Paloma source code

Use `git` to retrieve [Paloma](https://github.com/palomachain/paloma), and check 
out the `main` branch, which contains the latest stable release.

 ```bash
 git clone https://github.com/palomachain/paloma.git
 cd paloma
 git checkout [latest version]
```
   
 > Example: git checkout v0.4.0-alpha

### 2. Build Paloma from source

Build Paloma, and install the `palomad` executable to your `GOPATH` environment variable.

```bash
go build ./cmd/palomad
```

### 3. Verify your Paloma installation

Verify that Paloma is installed correctly.

```bash
palomad version --long
```

The following example shows version information when Paloma is installed correctly:

```bash
 name: paloma
 server_name: palomad
 version: v0.4.0-alpha
 commit: 0f7194bc7f75283630f5239976c6d7cf2b41a47c
 build_tags: ""
 go: go version go1.18.3 linux/amd64

 # followed by many build dependenecies (build_deps)
```

::: tip

If the `palomad: command not found` error message is returned, confirm that the Go binary path is correctly configured by running the following command:

```
export PATH=$PATH:$(go env GOPATH)/bin
```

:::
