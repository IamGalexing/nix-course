# introduction

In the previous assignment, you explored a library that allows us to work with routing in the react application. But in a real application, it often happens that you don't have access to all the pages of the application until you log in to your account. In such cases, you should use a private route. Your task today will be to create this private route.

Tasks:

- [ ] Setup router and add routes for the home - "/", contacts - "/contacts", cart - "/cart".
- [ ] Use React Router Outlet
- [ ] Create a sidebar component with links to the main routes: "/", "/contacts", "/cart".
- [ ] Create components that display the name of each page (Home page, Contacts, Cart page).
- [ ] Сreate a "Not Found" page for all non-existing routers.
- [ ] Add login route and create a state for the auth state. Create a logout button.
- [ ] Make "/cart" route private, make it page visible for the authenticated users only. Redirect to "/" if user isn't authenticated.

## Useful links

- [React Router](https://reactrouter.com/en/main/components/outlet)

/label level::elementary
