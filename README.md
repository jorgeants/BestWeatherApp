# BestWeather

BestWeather is a mobile app built with JavaScript technologies based in [React Native](https://facebook.github.io/react-native/). It's amazing app to view weather forecast of your city, including offline access.

## Flux Architeture

For administrate and share the main state to all application, we use the [Redux](https://redux.js.org/) library.

The **Redux** is a state management library that follows the principles of [Flux Architecture](https://facebook.github.io/flux/).

But, the Redux follow the three principles:

- Single source of truth
- State is read-only
- Changes are made with pure functions

For more information access: [Three Principles of the Redux](https://redux.js.org/introduction/three-principles)

## Prerequisites to run and coding on your environment

Your need of the some prerequisites installed and configured before try run and coding the project:

- Internet Connection (of course)
- NodeJS >= 10.0.0
- Yarn >= 1.21
- And some React Native prerequisites. More info, access the [React Native Getting Started](https://facebook.github.io/react-native/docs/getting-started) page in **React Native CLI Quickstart** tab for more more details on how to set up your environment.

## Run the project

### Developer mode (local/dev environment)

First time your need run in project root path:
```
yarn install
```

And if you're going to run on iOS:
```
cd ios && pod install
```

#### iOS

With Xcode installed, configured and fulfilling the above prerequisites, execute:
```
npx react-native run-ios
```

#### Android
With yout simulator running, execute:

```
npx react-native run-android
```

## For Coding

Some Text Editor, with ESLint, Prettier and editorConfig installed and configured. I recommend the Visual Studio Code (VSCode).

### Debug

For help debug the application install Reactotron.

Download the latest release for your system operational: https://github.com/infinitered/reactotron/releases
