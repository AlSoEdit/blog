'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import b_ from '../../../libs/b_';

import './BlogPost.css';

const b = b_.lock('blog-post');

export default class BlogPost extends Component {
    render() {
        const { title, content, id, preview } = this.props;

        return (
            <div className={b()}>
                <div className={b('inner')}>
                    <Link
                        className={b('title-link', { preview })}
                        to={`/post/${id}`}
                    >
                        {title}
                    </Link>
                    <p className={b('content')}>{content}</p>
                </div>
            </div>
        );
    }
}

BlogPost.propTypes = {
    preview: PropTypes.bool,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};
