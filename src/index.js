import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'

import FlexkidsApp from './FlexkidsApp';
import rootReducer from './reducers'
import mainSaga from './sagas'
import './index.css';


import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware   = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(mainSaga);

const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <FlexkidsApp />
        </Router>
    </Provider>
);

render(
    <Root store={store} />,
    document.getElementById('root')
);

registerServiceWorker();
