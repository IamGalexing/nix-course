# Formik Form

In this task, we are going to work with `Formik` form validation library. `Formik` is another way to make react form validation.

## Main goal

Add `formik`, `yup` to project

- [formik](https://www.npmjs.com/package/formik)
- [yup](https://www.npmjs.com/package/yup)

**Don't forget we use yarn in our project**

Create short form for adding product to server. We will use `Formik` tools like:

- **Formik**
- **Form**
- **Field**
- **ErrorMessage**

**Important**: Don't use regular input. Use `formik` fields

Our form must have next fields:

1. Title:
   - input type text;
   - validation:
     - Field is required. Required message - `Title is required`
     - **Min length** of characters is 5, if it less than 5 you need to show message `Title must be at least 5 characters`

2. Description:
   - input type textarea;
   - validation:
     - Field is required. Required message - `Description is required`
     - **Min length** of characters is 5, if it less than 5 you need to show message `Description must be at least 5 characters`
     - **Max length** of characters is 50, if it more than 5 you need to show message `Description cannot exceed 50 characters`

3. IsFavorite
   - input type radio;
   - validation:
     - Field is required.

4. Category
   - select;
   - validation:
     - Field is required. Required message - `Please select a category`

5. Shop
   - input type text;
   - validation:
     - Field is required. Required message - `Shop is required`
     - **Min length** of characters is 5, if it less than 5 you need to show message `Shop name must be at least 5 characters`

After successfully filling in the fields and clicking on the submit button, you should display the text like this: `Form values submitted successfully`

**Optional** you can add some styles if you want.

### Useful links

- [Formik Documentation](https://formik.org/docs/overview)
- [Formik component](https://formik.org/docs/api/formik)
- [Form](https://formik.org/docs/api/form)
- [Field](https://formik.org/docs/api/field)
- [ErrorMessage](https://formik.org/docs/api/errormessage)

/label level::elementary
/label react::component
/label react::form
