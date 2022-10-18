# Numeric

Paloma.js includes `Dec` and `Int`, which represent decimal numbers and integer numbers, in a Cosmos-SDK compatible way.

```ts
import { Dec, Int } from '@paloma/Paloma.js';

// conversion into dec
const d = new Dec(123.11);

// addition
d.add(3).sub(5).div(3).mod(2);
