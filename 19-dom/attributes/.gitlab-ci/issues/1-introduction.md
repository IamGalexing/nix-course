# Attributes

In this task, we are going to have some practice with attributes.
First of all, before starting to make a solution you need to create markup like this:

```html
    <div class="task-wrapper">
        <p>Choose type of Gas:</p>
        <input type="text" class="input">
        <div>
            <button class="gas" data="1.2">A92</button>
            <button class="gas" data="1.5">A95</button>
            <button class="gas" data="2.0">A98</button>
        </div>
        <div class="out"></div>
    </div>
```

after creating markup we can start making solutions;

This function must count the price of value that you put in input `.input`
and multiply `.input` value by value of `data` attribute

For example:
You put `20` in `.input` and press on `A92`.

`A92` has a data value  `1.2` which means you need
multiply `20 * 1.2`

After clicking on button you need to show the next message: `Total price: 24`

## Useful links

- [getAttribute() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute)
- [setAttribute() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
- [Event: target property](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)

<!-- Don't forget about labels. Example: -->
/label level::elementary
/label js::dom
