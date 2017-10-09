'use strict';

import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import { loadStorageItem, saveItemToStorage } from './storage';

const storageState = loadStorageItem('state') || { posts: [] };

const store =  createStore(
    reducers,
    storageState,
    applyMiddleware(createLogger())
);

store.subscribe(() => {
    saveItemToStorage('state', store.getState());
});

export default store;
