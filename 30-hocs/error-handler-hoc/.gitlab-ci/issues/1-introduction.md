# Error Handler HOC

Your task is to create a Higher Order Component (HOC) that handles errors in wrapped components using functional lifecycle methods. The HOC should catch any errors thrown by the wrapped component and display an error message or a fallback UI. The errors should be caused by an input of type email. If the user types an invalid email, an error should appear and the HOC should handle it. Additionally, you need to change the UI when an error occurs.

## Requirements

1. Create an HOC with `WithInputValidation` name inside `hocs` folder that accepts the wrapped component as an argument.
2. Implement error handling logic using useState hook.
3. If an error occurs, set an error state using the useState hook.
4. Display an error message `'Invalid value!'` using a span when the error state is set.
5. Create `InputWithValidation` component inside `components` folder which accepts a value and onChange function.
6. Implement an input field to capture an email value.
7. Validate the email input and trigger an error if it is invalid.

Note:

- You can use any UI framework or write custom CSS to style the error message modal window and the input field.
- Make sure your solution is well-structured and follows best practices for React development.

Good luck!

### Useful links

- [Higher-Order Components](https://legacy.reactjs.org/docs/higher-order-components.html)
- [Understanding React higher-order components](https://blog.logrocket.com/understanding-react-higher-order-components/)

/label level::elementary
/label react::component
