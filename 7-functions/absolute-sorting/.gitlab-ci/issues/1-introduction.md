# absolute-sorting

Let's try some sorting. Here is an array with the specific rules.

The array has various numbers. You should sort it, but sort it by absolute value in ascending order. For example, the sequence `(-20, -5, 10, 15)` will be sorted like so: `(-5, 10, 15, -20)`. Your function should return the sorted array.

**Precondition:** The numbers in the array are unique by their absolute values.

**Input:** An array of numbers

**Output:** array sorted by absolute values in ascending order.

**Example:**

```javascript
expect(run([-20, -5, 10, 15])).toEqual([-5, 10, 15, -20]);
expect(run([1, 2, 3, 0])).toEqual([0, 1, 2, 3]);
expect(run([-1, -2, -3, 0])).toEqual([0, -1, -2, -3]);
```

## Useful links

- [Functions](https://javascript.info/function-basics)
- [Array methods](https://javascript.info/array-methods )

**Hot it is used:** where similar tasks are used
