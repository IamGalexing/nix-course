# Introduction

In this task you will teach how to prepare branches for merge requests (MR)

## Prepare Branches

- fork this repository
- clone it to your local machine
- make a `develop` branch from `main`
- add `.gitignore` file to `develop` and upload it to remote
- create `f1` branch from `develop`
  - add `index.html` file with some content and commit it with `f1: index.html` message
  - add `styles.css` file with some content and commit it with `f1: styles.css` message
  - add `index.js` file and commit it with `f1: index.js` message
  - squash these three commits into one.
- create `f2` branch from `develop` branch
  - add `LICENSE` file with `MIT` License text and commit
  - push `f2` branch to remote
  - merge `f2` branch into `develop` (do not delete branch on remote)
  - update remote `develop` branch (remote and local)
- update `main` from `develop`
- update `f1` branch from `develop` (merge or rebase?)
- squash commits in `f1` branch. (the main goal to have one commit before MR)
- make MR from `f1` to `develop` branch
- attach link or your repo to assignment

### Useful links

- [License](https://en.wikipedia.org/wiki/MIT_License)
