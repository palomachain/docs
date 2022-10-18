# Paloma.py
Paloma.py is a Python SDK for writing applications that interacts with the Paloma blockchain from Python and provides simple abstractions over core data structures, serialization, key management, and API request generation.

# Get started with Paloma.py

This is an in-depth guide on how to use the `Paloma.py` SDK.

*NOTE: All code starting with a $ is meant to run on your terminal (a bash prompt). All code starting with a >>> is meant to run in a python interpreter, like ipython.*

## Prerequisites

The Paloma Python SDK requires [Python v3.7+](https://www.python.org/downloads/).

Paloma.py can be installed (preferably in a [virtual environment](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/) from PyPI using pip) as follows:

## Installation

```sh
$ pip install -U paloma_sdk
```

Paloma SDK uses [Poetry](https://python-poetry.org) to manage dependencies. To get set up with all the required dependencies, run:
```sh
$ pip install poetry
$ poetry install
```

## Tests

Paloma.py provides extensive tests for data classes and functions. To run them, after the installing the dependencies.

```
$ make test
```

## Code Quality

Paloma SDK uses [Black](https://black.readthedocs.io/en/stable), [isort](https://isort.readthedocs.io/en/latest), and [Mypy](https://mypy.readthedocs.io/en/stable/index.html) for checking code quality and maintaining style. To reformat run the following after installing the dependencies.

```sh
$ make qa && make format
```

## Initialize the LCD

Paloma’s LCD or Light Client Daemon allows users to connect to the blockchain, make queries, create wallets, and submit transactions. It's the main workhorse behind `Paloma.py`. Check the [available networks](../../../resources/networks.md) to chose the right `chainID`.

```py
>>> from paloma_sdk.client.lcd import LCDClient
>>> paloma = LCDClient(chain_id="<paloma chain id>", url="https://testnet.palomaswap.com")
>>> print(terra.tendermint.node_info())
```
