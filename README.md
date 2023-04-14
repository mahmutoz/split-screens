# Split Screen Project

This is a simple project to split the screen in four parts. The left-top part is a list of the data table, the
right-top part is a show split location information, the left-bottom is a form to add new data, and the right-bottom is
empty. :)

## Demo

[https://split-screens.vercel.app/](https://split-screens.vercel.app/)

## How to use

1. Clone this project
2. Run `npm install` or `yarn install` to install the dependencies
3. Run `npm run dev` or `yarn dev` to start the project
4. Open your browser and go to `http://localhost:5173/`
5. Enjoy it!

## Dependencies

- [React](https://reactjs.org/): A JavaScript library for building user interfaces
- [@reduxjs/toolkit](https://redux-toolkit.js.org/): A predictable state container for JavaScript apps
- [React-Split](https://split.js.org/): A tiny library for creating beautiful split views
- [Redux-Persist](https://github.com/rt2zz/redux-persist#readme): Persist and rehydrate a redux store

## Development Dependencies

- [Saas](https://sass-lang.com/): A CSS preprocessor
- [Vite](https://vitejs.dev/): A build tool that aims to provide a faster and leaner development experience for modern
  web projects
- [Prettier](https://prettier.io/): An opinionated code formatter

## Directory Structure

- [__public__](public)
- [__src__](src)
    - [\__mocks\__](src/__mocks__)
    - [__assets__](src/assets)
        - [__img__](src/assets/img)
            - [__icons__](src/assets/img/icons)
            - [__logos__](src/assets/img/logos)
        - [__sass__](src/assets/sass)
    - [__components__](src/components)
        - [__app__](src/components/app)
            - [__panels__](src/components/app/panels)
                - [__mainPanel__](src/components/app/panels/mainPanel)
                - [__panel1__](src/components/app/panels/panel1)
                - [__panel2__](src/components/app/panels/panel2)
                - [__panel3__](src/components/app/panels/panel3)
                - [__panel4__](src/components/app/panels/panel4)
        - [__shared__](src/components/shared)
            - [__footer__](src/components/shared/footer)
            - [__navigation__](src/components/shared/navigation)
            - [__topbar__](src/components/shared/topbar)
    - [__layouts__](src/layouts)
    - [__pages__](src/pages)
        - [__dashboard__](src/pages/dashboard)
    - [__stores__](src/stores)
        - [__reducers__](src/stores/reducers)
    - [App.jsx](src/App.jsx)
    - [main.jsx](src/main.jsx)
