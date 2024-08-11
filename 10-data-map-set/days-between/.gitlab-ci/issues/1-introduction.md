# Days-between

How old are you in a number of days? It's easy to calculate - just subtract your birthday from today. We could make this a real challenge though and count the difference between any dates.

You are given two dates as an array with three numbers - a year, month and day. For example: 19 April 1982 will be [1982, 4, 19]. You should find the difference in days between the given dates. For example between today and tomorrow = 1 day. The difference will always be either a positive number or zero, so don't forget about the absolute value.

**Input:** Two dates as arrays of numbers.

**Output:** The difference between the dates in days as a number.

## Example

```javascript
expect(run([1982, 4, 19], [1982, 4, 22])).toBe(3);
expect(run([2014, 1, 1], [2014, 8, 27])).toBe(238);
expect(run([2014, 8, 27], [2014, 1, 1])).toBe(238);
```

/label level::elementary
/label js::date