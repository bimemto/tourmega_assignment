# Context and goal

I have done this app for Tourmage job applicaiton.

## Main technologies used

- [React Native](https://github.com/facebook/react-native)

> A framework for building native apps with React.

- [Redux](http://redux.js.org/)

> Redux is a predictable state container for JavaScript apps.

- [React Navigation](https://reactnavigation.org/)

> Routing and navigation for your React Native apps

- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)

> React Native bundle set of Icons ready to use

## Running the project

- Clone this project

```
git clone < project-url.git >
```

- Install dependencies

```
npm install
```

### Android steps

- Launch a virtual android device [(through _Android Studio_ for instance)](https://developer.android.com/studio/run/managing-avds.html#viewing)

> If you have never installed any android virtual device, [follow those instructions](https://developer.android.com/studio/run/managing-avds.html#createavd)

- Then, run the project in executing on your project folder:

```
npx react-native run-android
```

### iOS steps

- Launch iOS simulator device [(through *Xcode*)]

- Go to ios folder and install native dependencies:

```
pod install
```

- Then, run the project in executing on your project folder:

```
npx react-native run-ios
```

## Testing

We will use [Jest](https://facebook.github.io/jest/) testing library because it allows us to test both components and functions in an easy and efficient way.

To run the tests, execute `npm test` in a terminal opened in the project folder.

## TODO

- Write more test cases to cover full of situations
- Add Search screen using Google Place API
