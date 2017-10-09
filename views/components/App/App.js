'use strict';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import { headerText, pageNotFound, postDoesNotExist } from '../../../constants/uiText';
import { Redirect } from 'react-router-dom';

import BlogFeed from '../BlogFeed/BlogFeed';
import BlogPostPage from '../BlogPostPage/BlogPostPage';
import Error from '../Error/Error';

import './App.css';

export default class App extends Component {
    render() {
        const { posts, createPost} = this.props;

        return (
            <div>
                <header className="header">
                    <p className="header__inner">{headerText}</p>
                </header>
                <div className="main">
                    <div className="main__inner">
                        <Switch>
                            <Route
                                exact path="/"
                                component={() => <BlogFeed posts={posts} createPost={createPost}/>}
                            />
                            <Route
                                exact path="/post/:id"
                                render={props => {
                                    const { id } = props.match.params;
                                    const post = posts.filter(p => p.id === id)[0];

                                    return post
                                        ? <BlogPostPage post={post}/>
                                        : <Redirect to={{ pathname: '/error', text: postDoesNotExist }}/>;
                                }}
                            />
                            <Route
                                path="*"
                                render={props => <Error text={pageNotFound || props.location.text}/>}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    createPost: PropTypes.func.isRequired,
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        })
    )
};
