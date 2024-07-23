---
title: "Binary Search"
---

- Big O: *O(log n)*

- Notes:
    - Sorted array is a must
    - `[low,high)` (low always inclusive, high always exclusive)

```ts
export default function bs_list(haystack: number[], needle: number): boolean {
  let low = 0;
  let high = haystack.length

  do {
    const mid = Math.floor(low + (high - low) / 2)
    const value = haystack[mid]

    if (value === needle) {
      return true
    } else if (value < needle) {
      low = mid + 1
    } else {
      high = mid
    }
  } while (low < high)

  return false
}
```
