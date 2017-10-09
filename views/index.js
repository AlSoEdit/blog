'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter, Route } from 'react-router-dom';

const blogPosts = [...(new Array(20)).keys()]
    .map(n => {
        return {
            title: `Post №${n}`,
            content: `Post №${n} content`,
            id: `${n}`
        };
    });

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" render={() => <App posts={blogPosts}/>}/>
    </BrowserRouter>,
    document.getElementById('app')
);