# Prototype - Cryptographer

This time you work in the cryptography center, and you get an important task! You already know a lot about classes, constructors, and prototypes. The center receives many encryption's, and we decide to create a Cryptographer constructor and add to its prototype a new method *`decrypt`*. This will allow us to make the decryption of messages much faster. The method receives two arguments *`enrtyptedPharse`* (string) and *`shift`* (number), and returns a decrypted phrase (string).

**Example:**

```javascript
const decrypted = cryptographer.decrypt('qbpq', 3);
console.log(decrypted);  // 'test'
```

*`enrtyptedPharse`* - it's a string that we should decrypt.
*`shift`* - it's a number that shows us the shift to the right, namely how many points we need to move from the current position of the letter. The shift can only occur to the right. But if the new index position is more than 26 (English alphabet length)? You should be back to the start of the alphabet!

**Example:**

```javascript
console.log(cryptographer.decrypt('a', 1)); // 'b'
console.log(cryptographer.decrypt('a', 4)); // 'e'
console.log(cryptographer.decrypt('z', 1)); // 'a'
```

**PAY ATTENTION**: An alphabet starts from index 1.

 ![English alphabet. Each letter have appropriate index](assets/alphabet-index.png)

> Non-literal characters and spaces should not be decrypted.

**Example:**

```javascript
console.log(cryptographer.decrypt('? !', 3)); // '? !'
```

> Letters can be in lower case and upper case. So you should return the letter with the appropriate case.

**Example:**

```javascript
console.log(cryptographer.decrypt('aBc', 1)); // 'bCd'
```

## Test Examples

Look at tests for examples:
 - [Tests](__tests__/index.spec.js)

/label level::elementary
/label js::prototype
