---
title: "Two Crystal Balls Problem"
---

- Big O: *O(√2)*

- Notes:
    - The problem consists in: (*skipping history*) You have one true value in an array of false values, and you should find the truthy value in the most optimized way.

```ts
export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length))

  let i = jumpAmount
  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) break;
  }

  i -= jumpAmount
  for (let j = 0; j < jumpAmount && i < breaks.length; j++, ++i) {
    if (breaks[i]) {
      return i
    }
  }

  return -1
}
```
