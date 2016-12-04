import { createStore, combineReducers } from 'redux';
import conversations from '../reducers/conversations.js';

const defaultStore = {};

const configureStore = function() {
    const rootReducer = combineReducers({
        conversations: conversations
    });

    return createStore(rootReducer, defaultStore);
};

export default configureStore;
