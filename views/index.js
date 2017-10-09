'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import AppContainer from './store/containers/AppContainer';
import store from './store';

const blogPosts = [...(new Array(20)).keys()]
    .map(n => {
        return {
            title: `Post №${n}`,
            content: `Post №${n} content`,
            id: `${n}`
        };
    });

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" render={() => <AppContainer posts={blogPosts}/>}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);