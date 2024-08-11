# Theme switcher

We are going to dive into react context in this task.

Let's say we have a blog where users can browse and publish articles. On the blog page, we can implement theme switching using React Context.

## Your task is

- Create a page that displays a list of articles with titles, authors, and publication dates. Every article can have content, images, and comments. Use ```constants``` inside the repository for article data.
- Add a `"Change Theme" button` to the header or footer of the blog page. This button will be used to toggle the theme of the application.
  - if our theme now is `light`, button has value `Switch to dark mode` and set body.backgroundColor to '#FFF' and body.color to '#333';
  - if our theme now is `dark`, button has value `Switch to light mode` and set body.backgroundColor to '#333' and body.color to '#FFF';
- Create the `ThemeContext`, which will store the current theme. Apply the `ThemeProvider` at the top-level component to provide access to the theme value for all components.
  - Wrap whole app into `ThemeProvider`
- Change theme. We take `current theme` and `theme switch function` that changes our theme from `context`, inside component where we decided to implement  `"Change Theme" button`
- We must change style like: `background`, `color` etc. when we call `theme switch function`.

## File structure

```tree
├── src
├── components
│   ├── Article.jsx
│   ├── BlogPage.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
├── constants
    ├── index.js
├── context
    ├── ThemeContext.jsx
```

## Example

![themeSwitch](/uploads/e1e0efcf58eba8e57e7c7fd4b70fbc47/themeSwitch.gif)

## Useful links

- [useContext](https://react.dev/reference/react/useContext)
