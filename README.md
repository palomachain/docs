<p align="center">
<img align="center" src="https://docs.palomachain.com/assets/Paloma_black.svg" width="200">
</p>

<div align="Center">
<h1>Paloma</h1>
<h3> The Fast Messenger Chain </h3>
<br>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](https://www.markdownguide.org/)
</div>

<!-- TOC -->
- [Contributing to Documentation](#contributing-to-documentation)
- [Running Locally](#running-locally)
- [Style and Configuration Guide](#style-and-configuration-guide)
    - [Formatting](#formatting)
    - [Static Site Generator](#static-site-generator)
    - [Automated Deployments](#automated-deployments)
- [License](#license)
<!-- /TOC -->

---

Welcome to the official Paloma chain documentation.

Paloma is a Cosmos-SDK blockchain for sending and receiving messages
from any other blockchain. Paloma’s design aims to enable any developer to control
any smart contract from the Paloma network. Paloma may be compared to the numerous
cross-chain messaging protocols currently exploding into the cryptocurrency ecosystem,
but with a few key differences.

Paloma messages are bidirectional between chains. For example, developers may write
solidity programs on Ethereum L1 that control contracts running on Osmosis or Fantom.
Paloma’s pigeons monitor these bidirectional messages and come to a consensus on their
execution, success, and subsequent logical call for further execution.

Paloma’s messages are natively scheduled and may be repeated. All Paloma messages are
structured to be scheduled and repeated, as needed, with advanced gas fee management on
the target chains.

Paloma gas fee management is itself a decentralized oracle for gas fee markets.
Any blockchain approved by Paloma governance for message routing will reveal a fee
oracle for the gas market. Paloma developers can predict and assess gas costs, on any
blockchain, from within Paloma. Paloma validators are compensated for gas fee management
from the usage of the gas fee oracle.

Paloma’s governance role is to encourage innovation on Paloma, via spending proposals from
the large community pool that will be a substantial portion of GRAINs, the Paloma protocol
native token. Governance also aims to protect the chain’s survival during times of unforeseen
stress that will be a part of this chain’s early life.

Paloma validators can receive additional rewards and compensation for being good messenger
pigeons through the Paloma gas fee oracle. As validators will need to monitor nodes on any
blockchain approved by governance, we wish to ensure that paths to revenue for validators
from emissions and from fees will match the increasing cost of monitoring the explosion of
public blockchains.

The Paloma documentation uses the former Terra chain documentation product and existing
Cosmos-based documentation as a foundation.

## Contributing to Documentation

The Volume Finance team are the primary maintainers of the Paloma chain documentation and will
review all issues and pull requests created in this repository.

## Running Locally

The documentation uses yarn as the package manager and the site is built from the source files in this
repository. After cloning the source locally, you can start the websites with each of these respective
commands.

Ensure you run yarn in the docs folder of the repository first to install dependencies:

```ssh
yarn install
```

To build and serve the documentation site in the local server, run:

```ssh
yarn dev
```

VuePress will start a hot-reloading development server at [localhost](http://localhost:8080)
using port `8080` as the default.

## Style and Configuration Guide

A writing style guide is in the process of being written.

### Formatting

Use [pretty-quick](https://prettier.io/docs/en/precommit.html#option-2-pretty-quickhttpsgithubcomazzpretty-quick)
as a pre-commit formatting tool. There is an automatic pretty-quick check that occurs pre-commit to format your
changed/staged files.

```ssh
yarn add pretty-quick
```

To format markdown pages, run the following in the `docs` folder:

```ssh
yarn pretty-quick --staged
```

To run pretty on the whole project:

```ssh
yarn pretty-quick
```

### Static Site Generator

The documentation's latest version uses the [VuePress static website generator](https://vuepress.vuejs.org/)
to convert the Markdown docs into a documentation website.

### Automated Deployments

The documentation site is built on the `gh-pages`` branch and automatically deployed to GitHub Pages.
The CICD production workflow will deploy main to the public Paloma documentation site.

## License

The Paloma chain Documentation is licensed under the [MIT](LICENSE) free software license.
