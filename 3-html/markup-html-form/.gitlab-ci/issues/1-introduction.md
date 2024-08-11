## Markup HTML Form

Analyze design and create semantic HTML for form: [Figma file](public/markup-html-form.fig)

- Provide appropriate names for fields.
- Provide placeholders for fields.
- Provide basic HTML validation:
  - First Name field - min 2 symbols, max 15 symbols, required
  - Last Name field - min 2 symbols, max 20 symbols, required
  - Date of Birth - required
  - City - required
  - Email - required
  - Password - required, must contain at least 8 characters, but no more than 32, at least one number, and one uppercase and lowercase letter
  - Confirm Password - the same as for Password
- Associate labels with fields.

### Requieremnts

- Code should be valid (use https://validator.w3.org/).
- Code should be formatted with prettier or manually.
- Code should be semantic (use HTML5 tags).
- HTML should be created according to style guide rules.
- HTML should be structured and readable even when styles are not presented.
- Classes, names, and ids should be meaningful and laconic.
- Classes should be reusable as much as possible.
- Placeholders should correspond to the design.
- Basic validation should be provided using HTML attributes.
- Labels should be associated with the appropriate fields, clicking on the label should cause the appropriate field’s focus.

/label level::elementary
/label markup::html
