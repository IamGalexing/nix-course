# Hoc Protected Route

Create Two-Page Application with Login Protection using Higher-Order Component (HOC)

Your task is to create a two-page application. The first page should be publicly accessible, while the second page should require the user to log in. To implement this functionality, you will need to write a Higher-Order Component (HOC) that checks whether the user is logged in and grants access to the second page. If the user is not logged in, they should be redirected back to the first page.

## Public Page

The public page should serve as a landing page for the application. This page should be accessible to all users without requiring a login.

## Login-Protected Page

The second page should only be accessible to users who have successfully logged in. This page should display personalized content or functionality based on the user's credentials. Your task is to design and implement a simple login system using React JS. This can be achieved using state management, such as useState or useContext, or any other preferred method.

## Higher-Order Component (HOC)

To implement the login protection functionality, you need to create a Higher-Order Component (HOC) **PrivateRoute.jsx**. The HOC should check if the user is logged in before rendering the protected page. If the user is not logged in, the HOC should redirect them back to the first page.

Feel free to use any additional libraries or tools you deem necessary to accomplish the task.

## Create components according to the test file names and inside components folder

## Example

![hoc_private_route_gif](/uploads/dc7b633f5e9a4285ddac58fb2616b4d4/hoc_private_route_gif.gif)

### Useful links

- [React Docs](https://legacy.reactjs.org/docs/higher-order-components.html)

/label level::elementary
/label react::component
/label react::hoc
