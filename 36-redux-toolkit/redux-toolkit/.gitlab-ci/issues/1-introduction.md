# Redux Toolkit

`Don't forget we use yarn in our project`

## Before starting read this:

- Don't change exports file
- Don't rename files
- Follow instruction in files
- setup next packages:
  - reduxjs - toolkit
  - axios
  - react-redux
- Don't change current folder's structure. You can add new folders, files but don't change files/folders that already exist

## Redux Music App

The main functionality of the application is searching, displaying audio tracks by search term, and adding them to favorites.

## Home Tab

This is the start tab for the user.

The tab is responsible for **searching**, displaying a **list of music tracks** and **adding them to favorites**.
If there is _no data_ or an error occurs, the user should see an message with the text _**No data**_.

You need add search form with:

- input with placeholder: `input search text`
- button with text `search`

When you start your App you will see `Home page`. Before searching any tracks, list of track in store is empty. When list of tracks `is empty` you must show message `No data`, if list of tracks `isn't emty`, you show list of traks.
When you enter a `query` to the input a and click the search button, data is fetched from the API.

* You must send only 1(one) request to the API for fetching data.

The data source endpoint is `https://musicbrainz.org/ws/2/release-group?fmt=json&query=${query}`, where _**query**_ is the input value.
* _**query**_ could be - title, author of track, title of album or something like that. 

When you click on the `add to favorite` **button**, the album/tracks is added to your favorites and change content from `add to favorite` to `remove from favorites`

## Favorites Tab

The tab is responsible for displaying list of favorite tracks.

When you _reload_ the app, the previously saved tracks **shouldn’t be lost** (the data is saved in `LocalStorage`).
If list of favorites is empty we must see message `No data`

### Optional it isn't important

You can make the same functionality(with LocalStorage) that you've seen above with

- [Redux Persist](https://www.npmjs.com/package/redux-persist)

If you have enough time, you can make it. It's totally up to you. It doesn't impact your grade.

When you switch to the tab, the router gets updated (‘/favorites’ is present at the address bar)

By clicking to remove from favorites album/traks is _removed_ from the **list** and **LocalStorage**

### Useful links

- [MusicBrainz API](https://musicbrainz.org/doc/MusicBrainz_API)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Axios](https://github.com/axios/axios)
- [GitHub API Docs](https://docs.github.com/en/rest?apiVersion=2022-11-28)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/en/main)
- [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

/label level::elementary
/label react::component
