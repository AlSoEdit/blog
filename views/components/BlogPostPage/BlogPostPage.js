'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { backButtonText } from '../../../constants/uiText';

import BlogPost from '../BlogPost/BlogPost';
import CenteredWrapper from '../CenteredWrapper/CenteredWrapper';
import Button from '../Button/Button';

import icon from '../../images/arrow.png';
import './BlogPostPage.css';

export default class BlogPostPage extends Component {
    render() {
        const { post } = this.props;

        return (
            <div className="blog-post-page">
                <CenteredWrapper>
                    <div className="blog-post-page__button-wrapper">
                        <Button buttonText={backButtonText} linkUrl={'/'}>
                            <img className="blog-post-page__button-icon" src={icon}/>
                        </Button>
                    </div>
                    <BlogPost { ...post } />
                </CenteredWrapper>
            </div>
        );
    }
}

BlogPostPage.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired,
};
