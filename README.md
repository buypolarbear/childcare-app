# Read me first!

## Overview

This is a React app (initialized with `create-react-app`) with `react-router`, `redux` and `redux-sagas` and supporting libraries. It's quite similar
to what we actually use in our projects. 

* `React` and `react-router` provides us our basics like rendering and navigation.
* `redux` and `redux-sagas` provides us to maintain a single centralized state and a way to implement side-effects to the messages sent.  

It may seem a bit daunting, so to get you started here's a play-by-play of when a user visits `/news`:

1. `index.js` initializes the application and starts up the `FlexkidsApp` component.

2. The `FlexkidsApp` component determines what component to show for the current URL. It will select `NewsOverviewContainer` for `/news`.

3. The `NewsOverviewContainer` is an higher-order component, wrapping the `NewsOverview` component. This is our interface to the `redux` store. It will select what part of the centralized state (`mapStateToProps` ) it will provide and monitor for changes and what actions (`mapDispatchToProps`) to provide to the wrapped component.  

4. When `NewsOverviewContainer` is rendered it selects the property `state.news.items` from the state (by means of `selectNewsItems`) as property `newsItems` and an action creator `newsLoaded` as property `newsLoaded` to `<NewsOverview />`. More on actions and action creators in the next step.

5. When `NewsOverview` is rendered it inspects if the `newsItems` property it received actually has any contents. And if not it will send a message to the `redux` store requesting that data. Specifically, in `redux` jargon: it dispatches the `NEWS_REQUEST` action by calling the `newsRequest` action creator.   

6. The `redux` store is configured in such a way that when it receives the `GET_NEWS` action it will call the `getNews` saga which actually does the data loading. When the data arrives it sends a new message (`NEWS_LOADED`) to the store with all the details.

7. When the `redux` store receives the `NEWS_LOADED` action it will call a reducer to update the centralized state. In this case the 
`newsReducer` is called which updates `state.news.items`, which in turn results in a re-render of the `NewsOverviewContainer`+`NewsOverview` components which now finds a value for the `newsItems` property and renders it accordingly. 

## Resources

* React Redux - https://redux.js.org/basics/usage-with-react  | https://redux.js.org/introduction
* React Sagas - https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html
* React Router - https://reacttraining.com/react-router/core/guides/quick-start
