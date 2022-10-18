# Paloma.js
Paloma.js is a JavaScript SDK for writing applications that interacts with the Paloma blockchain from either Node.js, browser, or React Native environments and provides simple abstractions over core data structures, serialization, key management, and API request generation.

## Features
- Written in TypeScript, with type definitions
- Versatile support for key management solutions
- Works in Node.js, in the browser, and React Native
- Exposes the Paloma API through LCDClient
- Parses responses into native JavaScript types
- We highly suggest using Paloma.js with TypeScript, or JavaScript in a code editor that has support for type declarations, so you can take advantage of the helpful type hints that are included with the package.

# Get started with Paloma.js

This is an in-depth guide on how to use the `Paloma.js` SDK.

## Prerequisites

- [npm and node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## 1. Set up your project

1. Create a new directory for your project:

   ```sh
   mkdir <my-Paloma-js-project>

   ```

2. Enter your new project directory:

   ```sh
   cd <my-Paloma-js-project>
   ```

3. Next, initialize npm, install the `Paloma.js` package, and create an `index.js` file to house the code:

   ```sh
   npm init -y
   npm install @paloma/Paloma.js
   touch index.js
   ```

4. Open the `package.json` file in a code editor and add `"type": "module",`.

   ```json
   {
     // ...
     "type": "module"
     // ...
   }
   ```

## 2. Initialize the LCD

Paloma’s LCD or Light Client Daemon allows users to connect to the blockchain, make queries, create wallets, and submit transactions. It's the main workhorse behind `Paloma.js`.

1. Install a fetch library to make HTTP requests and dynamically pull recommended gas prices. You can use the one referenced below or choose your favorite.

   ```sh
   npm install --save isomorphic-fetch
   ```

2. Open your `index.js` file in a code editor and input the following to initialize the LCD. Check the [available networks](../../../resources/networks.md) to chose the right `chainID`:

   ```ts
   import fetch from "isomorphic-fetch";
   import { Coins, LCDClient } from "@paloma/Paloma.js";
   const gasPrices = await fetch(
     "", { redirect: 'follow' }     //todo: confirm api for gas prices
   );
   const gasPricesJson = await gasPrices.json();
   const gasPricesCoins = new Coins(gasPricesJson);
   const lcd = new LCDClient({
     URL: "http://testnet.palomaswap.com:1317",
     chainID: "<paloma chain ID>",
     gasPrices: gasPricesCoins,
     gasAdjustment: "1.5", // Increase gas price slightly so transactions go through smoothly.
     gas: 10000000,
   });
   ```

## Paloma.js in the browser
You can access all the objects of the `@palomachain/paloma.js` from the global Paloma object if you load paloma.js with a `<script>` tag.

Include the following in your browser:

```js
  <script
     crossorigin
     src="https://unpkg.com/@palomachain/paloma.js/dist/bundle.js"></script>
```  

## Paloma.js in React Native
In order to use Paloma.js inside React Native, you need to add the `node-libs-react` native package and `react-native-get-random-values` package to your React Native app's package.json.

`yarn add node-libs-react-native react-native-get-random-values`

You will need to register Node.js native modules in an entry point of your application, such as index.tsx:

`import 'node-libs-react-native/globals';
import 'react-native-get-random-values';`

Also, add resolvers to your metro.config.js

```js
   module.exports {
     // ...
     resolver: {
       // ...
       extraNodeModules: require('node-libs-react-native'),
     },
     // ...
   }
``` 

## Examples

View the [Common examples](common-examples.md) section for more information on using Paloma.js.
