import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers';
import App from './app';

const preloadedState = window.__INITIAL_STATE__

delete window.__INITIAL_STATE__

//create store with inital state
const store = createStore(reducers, preloadedState);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);