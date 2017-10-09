'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './BlogPost.css';

export default class BlogPost extends Component {
    render() {
        const { title, content, id, preview } = this.props;
        const linkClassName = `blog-post__title-link${preview ? ' blog-post__title-link--preview' : ''}`;

        return (
            <div className="blog-post">
                <div className="blog-post__inner">
                    <Link
                        className={linkClassName}
                        to={`/post/${id}`}
                    >
                        {title}
                    </Link>
                    <p className="blog-post__content">{content}</p>
                </div>
            </div>
        );
    }
}

BlogPost.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};
