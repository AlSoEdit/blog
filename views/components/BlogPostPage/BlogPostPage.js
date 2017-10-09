'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { backButtonText } from '../../../constants/uiText';
import b_ from '../../../libs/b_';

import BlogPost from '../BlogPost/BlogPost';
import CenteredWrapper from '../CenteredWrapper/CenteredWrapper';
import Button from '../Button/Button';

import icon from '../../images/arrow.png';
import './BlogPostPage.css';

const b = b_.lock('blog-post-page');

export default class BlogPostPage extends Component {
    render() {
        const { post } = this.props;

        return (
            <div className={b()}>
                <CenteredWrapper>
                    <div className={b('button-wrapper')}>
                        <Button buttonText={backButtonText} linkUrl={'/'}>
                            <img className={b('button-icon')} src={icon}/>
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
