# Markup CSS Pseudo Element

Utilize pseudo-classes and pseudo-elements to replicate the behavior on the design: [Figma file](https://gitlab.nixdev.co/js/edu/asgmt/markup/markup-css-pseudo-element/-/blob/main/public/markup-css-pseudo-element.fig).

Employ transition properties to ensure smooth hover effects and use a URL encoder for icons sourced from the Figma file.

No need to create extra elements in HTML to show states managed via CSS: hover, focus, active. It's enough to create one button and one link. We can add extra elements If we need to show checked, required, filled, and invalid states: 4 radio buttons (default, checked, required, invalid), 4 checkboxes (default, checked, required, invalid), 4 inputs (default, filled, required, invalid).

`Note the following considerations`:

- Avoid introducing extra classes like `button-hover`. Instead, rely on pseudo-classes for handling different states.
- Labels do not need to change dynamically. You can use default labels like `Button`, `Link`, `Radio`, etc., without specifying the state of the element.
- Apply default styles for error messages and only modify their visibility when the field becomes invalid. Standard browser validation is not necessary; instead, error states should become visible when the `has-error` class is added to the relevant field.

To implement button arrows, use just one `before` or `after` pseudo-element, and move it from the left side to the right.

To minimize redundancy in your CSS, keep in mind that form controls share similar styling. General styles for labels are similar, and each control should have matching hover and focus states, such as the same border color and shadow. The "required" marker should also be consistent.

`Note`: No need to apply any logic via JS in this specific task. Just use pure HTML and CSS.

## Requirements

- Code validity: Ensure your code is free of errors.
- Code formatting: Format your code using Prettier or manual formatting, following best practices.
- Markup compliance: Create a markup that aligns with the style guide rules.
- Markup correspondence: Ensure that the markup corresponds to the provided design.

## Specific Requirements

- Each element should represent every state as outlined in the design.
- Dynamic states should be implemented using pseudo-classes.
- Arrows should be implemented using pseudo-elements, encoded with a URL encoder.
- Custom radio and checkboxes should be implemented using pseudo-elements. 
- Default checkbox and radio controls should be visually hidden, but available for screen readers.
- Labels should be related to appropriate fields.
- Hover states should be smooth and have the appropriate cursor type.
- All components should be reusable: all classes should be reusable, and each element should look good in every place where it will be inserted.
  - There should be no margins directly on components, as they may not be needed in other places. Spacings should be set on extra divs around controls for layout purposes.
  - Inputs should be stretched to 100% width and limited by their parents when necessary.

## Useful links

- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [CSS Pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp)
- [CSS Pseudo-elements](https://www.w3schools.com/css/css_pseudo_elements.asp)
- [CSS Selectors](https://www.w3schools.com/cssref/css_selectors.php)
- [CSS Selectors playground](https://www.w3schools.com/cssref/trysel.php)