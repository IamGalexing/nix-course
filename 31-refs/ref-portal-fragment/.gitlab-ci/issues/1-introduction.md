# Implementing a Focus Input Button

In this task we are going to work with next topics:

- createPortal
- Fragments
- useRef

## Reminder: Do not use dialog modal!

## Description

In this task, you will use the useRef hook to create a simple feature that focuses an input field when a button is clicked. This can be useful in scenarios where you want to improve user experience by automatically focusing on a specific input element.

Follow next steps

- Create a component that includes an `input field` and a `focus button`.
  - add an attribute `data-testid="input-field"` to the input field  
  - wrap this two elements in `fragment`
  - put this element into single component
  - render this component with `createPortal`
  - this component must appear like modal
  - Use the useRef hook to create a reference to the input element.
  - Create `event handler function` that will be called when the `'Focus the input'` button is clicked.
  - Within the event handler, access the current value of the input field using the reference created with useRef.
  - Use the focus() method on the input element reference to set focus to the input field after calling `event handler function`.
  - Add button `'Close Modal'` that close modal component
  - Add styles for modal. Use can use style from `style.css` or add your own style, it up to you
- Add button `'Show modal'` that calls modal component

## Optional

Customize the behavior by adding additional logic, such as clearing the input field's value or scrolling to the focused input element

## Useful links

- [createPortal](https://react.dev/reference/react-dom/createPortal)
- [useRef](https://react.dev/reference/react/useRef)
- [Fragment](https://react.dev/reference/react/Fragment)

/label level::elementary
/label react::component
