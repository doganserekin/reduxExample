import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './store/reducers';
import sagas from './store/sagas';
import Router, { middleWare } from './Router'
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import MainNavigator from './App'

const nav = createNavigationReducer(MainNavigator);

const appReducer = combineReducers({
	nav,
  reducers,
})

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  appReducer,
  // compose(
  //   applyMiddleware(middleWare),
  //   applyMiddleware(sagaMiddleware),
  // ),
);

// sagaMiddleware.run(sagas);

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => Main);
