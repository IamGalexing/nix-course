# Changing Color:

In this task, we will practice working with the state again. Sometimes in real projects, we need to change the user interface depending on some conditions, such as switching from a light theme to a dark one and vice versa. In this assignment, you will work with something similar.
You are tasked to create a simple color picker application using React. The application should consist of two buttons, each representing a different color. When a user clicks on a button, the background color of a div element should change to the selected color.

You need to:
- The _App_ component should use the useState hook to manage the color state.
- The _App_ component should pass the function to the **reusable** component _Button_ as a prop.
- The _Button_ component should receive the color prop and call the `onClick` function with the appropriate color when the button is clicked.
- The _App_ component should render two Button components, one with '_red_' and the other with '_blue_'.
- When the user clicks on a button, the background color of the `<div>` element should change to the selected color.
- **You must add data attribute** **`data-testid="color"`** to the `<div>` element to pass tests. 
<br/>
Example of code  `<div data-testid="color"></div>`

## Useful links

- [useState](https://react.dev/reference/react/useState)
- [Adding styles](https://react.dev/learn#adding-styles)

/label level::elementary
/label react:component
