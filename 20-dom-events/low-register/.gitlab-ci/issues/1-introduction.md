# GetLowerCaseSymbol

Create markup like this:

```html
 <div class="task-wrapper">
   <p>Type symbols below:</p>
   <input type="text" class="input">
 </div>
```

Write function that allows enter only letters in lower register

For example:

You type `s` in `.input` and you see `s` as value of `.input`
You type `S` in `.input` and you don't see `S` as value of `.input`
it doesn't have to work with `Caps lock` and `Shift + any letters`

Useful links:

- [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
- [onkeydown Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)
- [onkeyup Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event)

<!-- Don't forget about labels. Example: -->
/label level::elementary
/label js::dom-event
