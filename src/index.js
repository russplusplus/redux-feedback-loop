import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';

registerServiceWorker();

const setFeeling = (state = '', action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload;
    }
    return state;
}

const setUnderstanding = (state = '', action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

const setSupport = (state = '', action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    }
    return state;
}

const setComment = (state = '', action) => {
    if (action.type === 'SET_COMMENT') {
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        setFeeling,
        setUnderstanding,
        setSupport,
        setComment
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
