// @flow
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'

import tracks from './reducers/tracksReducer';

export default createStore(
    combineReducers({
        tracks
    }),
    {},
    applyMiddleware(thunk)
);
