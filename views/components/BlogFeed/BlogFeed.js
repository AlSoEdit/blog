'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import b_ from '../../../libs/b_';
import { forms } from '../../../constants/routes';
import { showMoreButtonText } from '../../../constants/uiText';

import Form from '../Form/Form';
import BlogPost from '../BlogPost/BlogPost';
import CenteredWrapper from '../CenteredWrapper/CenteredWrapper';
import Button from '../Button/Button';

import './BlogFeed.css';

const postToLoadCount = 3;
const b = b_.lock('blog-feed');

export default class BlogFeed extends Component {
    constructor(props) {
        super(props);
        this.showMorePosts = this.showMorePosts.bind(this);
        this.firstNewShownPost = null;
        this.showMoreButtonWasClicked = false;

        this.state = {
            postsShowedCount: postToLoadCount
        };
    }

    componentDidUpdate() {
        if (this.firstNewShownPost && this.showMoreButtonWasClicked) {
            this.firstNewShownPost.scrollIntoView();
            this.showMoreButtonWasClicked = false;
        }
    }

    showMorePosts() {
        let { postsShowedCount } = this.state;
        postsShowedCount += postToLoadCount;
        this.showMoreButtonWasClicked = true;

        this.setState({ postsShowedCount });
    }

    render() {
        const { posts, createPost } = this.props;
        const { postsShowedCount } = this.state;
        const postsLeftCount = posts.length - postsShowedCount;
        const postsComps = posts.slice(0, postsShowedCount)
            .map((post, index) =>
                <div
                    key={post.id}
                    ref={
                        index === postsShowedCount - postToLoadCount &&
                        ((el) => this.firstNewShownPost = el)
                    }
                >
                    <BlogPost {...post} preview />
                </div>
            );

        return (
            <div className={b()}>
                <div className={b('form-wrapper', { background: 'grey' })}>
                    <CenteredWrapper>
                        <Form
                            onSubmit={createPost}
                            formSettings={forms.createPost}
                        />
                    </CenteredWrapper>
                </div>
                <CenteredWrapper>
                    {postsComps}
                    {
                        postsLeftCount > 0 &&
                        <Button buttonText={showMoreButtonText} onClick={this.showMorePosts}/>
                    }
                </CenteredWrapper>
            </div>
        );
    }
}

BlogFeed.propTypes = {
    createPost: PropTypes.func.isRequired,
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        })
    ).isRequired
};
