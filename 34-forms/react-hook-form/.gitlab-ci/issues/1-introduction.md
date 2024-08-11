# Signup Form Component with React Hook Form

In this task we are learning how make form validation in react. We will work with one of the most famous tools for that - `react-hook-form` and support tool `yup`

## Component Structure

The Signup Form component consists of the following parts:

- `SignupForm` component: The main functional component that renders the signup form.
- `yup` library: Used for creating the validation schema.
- `react-hook-form` library: Used for managing form state and handling form submissions.
- `react-router-dom`

## Main goal

- Create `userPage`.
- Add `react-router-dom` to project
- Add `react-hook-form` to project
- Add `yup` to project
- Add `@hookform/resolvers` to project
- You need create a signup form  with next fields and add labels for fields:

The form fields must have the following validation rules:

1. **First name**: Required field with a minimum length of 2 characters and a maximum length of 20 characters.

    _First name error messages_:
   - `First name is required`
   - `First name must be at least 2 characters`
   - `First name must not exceed 20 characters`

2. **Last name**: Required field with a minimum length of 2 characters and a maximum length of 20 characters. Type string.

    _Last name error messages_:
   - `Last Name is required`
   - `Last Name must be at least 2 characters`
   - `Last Name must not exceed 20 characters`

3. **Subscribe**: Required field with a dropdown menu to select one of four options.Type select.
 
    _Subscribe error message_:
   - `Choose any subscribe`
   
4. **Gender**: Required field with radio buttons to select one of three options: male, female, or other. Type render.
5. **Birthday**: Required field with a date picker. Type date.

    _Birthday error message_: 
   - `Birthday is required`

6. **Password**: Required field with a minimum length of 6 characters. Type password.

    _Password error messages_:
   - `Password is required`
   - `Password must be at least 6 characters`

7. **Confirm Password**: Required field that must match the password field. Type password.

   **_Confirm Password error message_**: Required field that must match the password field. Type password
      - `Passwords must match`

8. **Email**: Required field with a valid email format. Type email.

    _Email error messages_:
   - `Email is required`
   - `Invalid email format`
   
If some field doesn't pass validation submit button is disabled.
When all fields passed validation and press on submit you need make redirection to `userPage`

**Optional** use can add some styles for form

### Useful links

- [react-hook-form](https://www.react-hook-form.com/get-started/)
- [Yup react-hook-form](https://www.react-hook-form.com/get-started/#SchemaValidation)
- [Yup npm](https://www.npmjs.com/package/yup)
- [Handle Error](https://www.react-hook-form.com/get-started/#Handleerrors)
- [react-router-dom](https://reactrouter.com/en/dev)

/label level::elementary
/label react::form
