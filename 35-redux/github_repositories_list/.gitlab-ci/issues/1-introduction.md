# git_repositories_list

Today's work will involve creating a project and connecting the `react-redux` library to it to create a global state. The purpose of the application is to display a list of repositories by GitHub username.

Redux itself is a standalone library that can be used with any UI layer or framework, including React, Angular, Vue, Ember, and vanilla JS. Although Redux and React are commonly used together, they are independent of each other.
If you are using Redux with any kind of UI framework, you will normally use a "UI binding" library to tie Redux together with your UI framework, rather than directly interacting with the store from your UI code.
React Redux is the official Redux UI binding library for React. If you are using Redux and React together, you should also use React Redux to bind these two libraries.

In this homework you need:

- [ ] Create a field to enter a user name to search for.
- [ ] When you click Add, the data is queried from the GitHub API and displayed as a list of repositories.
- [ ] While the data is being downloaded, the text ***Loading...*** is displayed instead of the list
- [ ] The application must handle network errors and display at least the error code .

Use fetch to create requests to the server!

## Some useful information

- You can see the initial view of the application and how it works in the .gif file.
- GitHub API URL to fetch repositories - `https://api.github.com/users/${userName}/repos`, where username is the name of the GitHub user.
- For data management, you have to use redux, react-redux, and redux thunk (for handling network requests).

### Useful links

- [CRA](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Axios](https://github.com/axios/axios    )
- [GitHub API Docs](https://docs.github.com/en/rest?apiVersion=2022-11-28)
- [Redux](https://redux.js.org/introduction/getting-started)
- [React-Redux](https://react-redux.js.org/)

/label level::elementary
