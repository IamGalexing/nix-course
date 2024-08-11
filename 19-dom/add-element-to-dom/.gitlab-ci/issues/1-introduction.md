# DOM manipulation

Hello, in this task we are going to dive into DOM manipulation especially:

- createElement
- append/prepend
- before/after

For creating markup you should use nex steps:

- Create element - there is one tool for creating element in JS. `document.createElement('nameOfElement')`
- After first step you can do any manipulation with element that was created in first step.

For example you can `add/remove` next things:

- class
- content
- style
- attribute
- event

Add element to dom: there are few ways how we can do it:

- elem.append(newElem)
- elem.prepend(newElem)
- elem.after(newElem)
- elem.before(newElem)

## Add to DOM

Create markup like this:

```html
<div class="base">
    <div class="block middle">Middle</div>
</div>
<button class="btn">change markup</button>
```

After you click on `.btn` you need change markup into this:

```html
    <div class="block before">before</div>
    <div class="base">
        <div class="block prepend">prepend</div>
        <div class="block middle">Middle</div>
        <div class="block append">append</div>
    </div>
    <div class="block after">after</div>
    <button class="btn">change markup</button>
```

### Useful links

- [classList property](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [after() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/after)
- [append() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)
- [before() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/before)
- [prepend() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend)
- [textContent vs innerText](https://www.geeksforgeeks.org/difference-between-textcontent-and-innertext/)

<!-- Don't forget about labels. Example: -->
/label level::elementary
/label js::dom
