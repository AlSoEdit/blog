'use strict';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import v4  from 'uuid/v4';
import App from '../../components/App/App';
import { addPost } from '../actions/posts';

function mapStateToProps(state) {
    const { posts } = state;

    return {
        posts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createPost: post => {
            post.id = v4();
            dispatch(addPost(post));
        }
    };
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);
