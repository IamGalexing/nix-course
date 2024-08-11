# 15-three-words

Let's teach the Robots to distinguish words and numbers.

You are given a string with words and numbers separated by whitespaces (one space). The words contain only letters. You should check if the string contains three words in **succession**. For example, the string "start 5 **one two three** 7 end" contains three words in succession.

**Input:** A string with words

**Output:** The answer is a boolean

**Example:**

```javascript
expect(run('Hello World hello')).toBe(true);
expect(run('He is 123 man')).toBe(false);
expect(run('1 2 3 4')).toBe(false);
expect(run('bla bla bla bla')).toBe(true);
```

## Useful links

- [Functions](https://javascript.info/function-basics)
- [Array methods](https://javascript.info/array-methods)
- [Strings](https://javascript.info/string)

**Hot it is used:** This teaches you how to work with strings and introduces some useful functions.

/label level::elementary
