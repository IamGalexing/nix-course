# Secret-message

Ever tried to send a secret message to someone without using the postal service? You could use newspapers to tell your secret. Even if someone finds your message, it's easy to brush them off as paranoid and as a conspiracy theorist. One of the simplest ways to hide a secret message is to use capital letters. Let's find some of these secret messages.

You are given a chunk of text. Gather all capital letters in one word in the order that they appear in the text.

For example: text = `" H ow are you? E h, ok. L ow or L ower? O hhh."`, if we collect all of the capital letters, we get the message `"HELLO"`.

**Input:** A text as a string

**Output:** The secret message as a string or an empty string.

**Example:**

```javascript
expect(run('How are you? Eh, ok. Low or Lower?  Ohhh.')).toBe('HELLO');
expect(run('hello world!')).toBe('');
expect(run('HELLO WORLD!!!')).toBe('HELLOWORLD');
```

## Useful links

- [Functions](https://javascript.info/function-basics)
- [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

**Hot it is used:** This is a simple exercise in working with strings: iterate, recognize and concatenate.

/label level::elementary
