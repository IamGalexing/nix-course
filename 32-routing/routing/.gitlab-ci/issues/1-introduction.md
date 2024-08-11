# React-routing

## Preparation

:warning: use React Router v5

- Go to [React Router v5](https://reactrouter.com/en/main/start/tutorial) and install `react-router-dom`
- Wrap `App` component in `BrowserRouter` component
- You can use any styles in task it totally up to you. If you don't want to use styles, you can skip they


You need create base routing between pages:

- Main page that contain list of item
- Item page than contain information only about item that was clicked by user
- Not Found Page for routes that don't exist

## Main page

- We can see main page if we put `/` in url
- If we click on `productItem` we go to `Item page` and we have to see `current id` in url.
  For example we click on item with `id=1` in url we see next path: `/1`

## ProductItem page

- Create this page
- When we come to this page we see all information about current item
- All information about current item we take from `PHONE_MODELS` by `id`
- Take `id` from url it is important part of this task!!!

### Useful links

- [React Router v6](https://reactrouter.com/en/main)
- [Routes](https://reactrouter.com/en/main/components/routes)
- [Route](https://reactrouter.com/en/main/components/route)
- [useNavigate](https://reactrouter.com/en/main/hooks/use-navigate#usenavigate)
- [useParams](https://reactrouter.com/en/main/hooks/use-params)
- [BrowserRouter](https://reactrouter.com/en/main/router-components/browser-router)

/label level::elementary
