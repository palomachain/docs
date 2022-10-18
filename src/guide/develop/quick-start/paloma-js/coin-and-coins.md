# Coin and Coins

A `Coin` represents a single coin, which is a pair consisting of a denomination and an amount. `Coins` represents a collection of `Coin` objects, that many operators use to group tokens in one construct.

```ts
import { Coin, Coins } from "@paloma/Paloma.js";

const c = new Coin("ugrain", 1500000); // 1.5 GRAIN
const c2 = new Coin("ugrain", 3000000); // 3 GRAIN
c.add(c2); // 4.5 GRAIN

const cs = new Coins([c, c2]);
const cs2 = new Coins({ ugrain: 12002, ukrw: 12399 });
cs2.map((x) => console.log(`${x.denom}: ${x.amount}`));
```

Coin / Coins input with decimal input will automatically be converted to a decimal Coin.

```ts
const c = new Coin("ugrain", 123.3); // a DecCoin
const d = new Coin("ugrain", "123.3"); // a DecCoin
```

Although it is convenient to represent the numbers through JavaScript's native `Number` format, you should refrain from doing so.
