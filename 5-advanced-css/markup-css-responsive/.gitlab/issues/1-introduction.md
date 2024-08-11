# Markup CSS Responsive

Create a responsive product list based on the provided design: [Figma file](https://gitlab.nixdev.co/js/edu/asgmt/markup/markup-css-responsive/-/blob/main/public/markup-css-responsive.fig)

Create styles for intervals. The page should look good at widths `320px`, `480px`, `600px`, `768px`, `1024px`, `1280px`, `1366px`, `1920px`. The layout should transition to a tablet view at `768px` and a desktop view at `1366px`.

`Note`: No need to apply any logic via JS in this specific task. Just use pure HTML and CSS.

## Requirements

- Code validity: Ensure your code is free of errors.
- Code formatting: Format your code using Prettier or manual formatting, following best practices.
- Markup compliance: Create a markup that aligns with the style guide rules.
- Semantic HTML: Use semantic HTML elements for improved accessibility and SEO.
- Markup correspondence: Ensure that the markup corresponds to the provided design.

## Specific Requirements

- Mobile-first approach:
  - general styles - Apply general styles that work on all devices, including mobiles
  - media queries - Utilize media queries for larger screens.
- The image should fill an area with an appropriate aspect ratio, no matter which image is inserted inside.
  - Use appropriate object-fit properties to ensure images maintain the correct aspect ratio, regardless of the image's size.
  - In the desktop view (1366+), the images should be square, and in other intervals (mobile and tablet), they should have proportions in line with the design.
  - Consider the "Netflix" example from presentation as a reference for implementing the design

## Useful links

- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [CSS Responsive](https://www.w3schools.com/css/css_rwd_intro.asp)
- [CSS Object-fit](https://www.w3schools.com/css/css3_object-fit.asp)
- [CSS Responsive images](https://medium.com/free-code-camp/time-saving-css-techniques-to-create-responsive-images-ebb1e84f90d5)
