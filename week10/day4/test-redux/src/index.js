import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import './index.css';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    // Add store property to Provider
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
    document.getElementById('root')
);