---
title: "Arrays Data Structure"
---

- javascript arrays are not exactly an array...
- arrays are contiguos memory space
- in a traditional language you code have something like: `a=int[3]`
- let's see `ArrayBuffer` in JavaScript in order to understand more about arrays

```js
const a = new ArrayBuffer(6); 
```

- "a" value is `ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00>, byteLength: 6 }`
- essentially it's a bunch of zeros, let's give a "view" for it, to interpret this array buffer

```js
const a8 = new Uint8Array(a);
```

- an array of unsigned 8 bit numbers (numbers from 0 to 255)

```js
a8[0] = 45;
a8[2] = 45;
```

- "a" value is now: `ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 00 00>, byteLength: 6 }`
- as you can see we've set the first position in the array, jumped one byte and set the third position
- now let's create another "view"

```js
const a16 = new Uint16Array(a);
```

- instead of 8 bits, now we're using 16 bits to interpret the same memory space

```js
a16[2] = 0x4545
```

- now "a" value is: `ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 45 45>, byteLength: 6 }`
- the difference is just the way it's being interpreted, in the first one we walk from 8 units to 8 units, in the second we walk from 16 units to 16 units
- that's the essence of the array, we have a contiguous memory space that can be interpreted and manipulated

## Operations You Can Do With Arrays

- insert (or better said, overwrite)
- delete (replace values in array for `0`)
- get
- all those operations are O(1) btw
