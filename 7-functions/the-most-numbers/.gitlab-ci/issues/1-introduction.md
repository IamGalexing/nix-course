# The-most-numbers

Let's work with numbers!

You are given an array of numbers (floats). You should find the difference between the maximum and minimum elements. Your function should be able to handle an undefined amount of arguments. For an empty argument list, the function should return 0.

Floating-point numbers are represented in computer hardware as base 2 (binary) fractions. So we should check the result with ±0.001 precision.
Think about how to work with an arbitrary number of arguments.

**Input:** An arbitrary number of arguments as numbers (number, float).

**Output:** The difference between maximum and minimum as a number (int, float).

**Example:**

```javascript
expect(run(1, 2, 3)).toBe(2);
expect(run(5, -5)).toBe(10);
expect(run(10.2, -2.2, 0, 1.1, 0.5)).toBe(12.4);
expect(run()).toBe(0);
```

**Hot it is used:** Here you will learn about passing an undefined amount of arguments to functions.

/label level::elementary
