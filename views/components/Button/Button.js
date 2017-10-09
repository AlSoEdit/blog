'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import b_ from '../../../libs/b_';

import './Button.css';

const b = b_.lock('button');

export default class Button extends Component {
    render() {
        const { buttonText, linkUrl, onClick, color, type } = this.props;
        const items = (
            <div className={b('items', { color })} onClick={onClick}>
                {this.props.children}
                <p className={b('text')}>{buttonText}</p>
            </div>
        );

        return (
            <div className={'button'}>
                {
                    linkUrl
                        ? <Link className={b('link')} to={linkUrl}>
                            { items }
                        </Link>
                        : <button className={b('btn')} type={type}>
                            { items }
                        </button>
                }
            </div>
        );
    }
}

Button.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    linkUrl: PropTypes.string,
    children: PropTypes.any
};

Button.defaultProps = {
    type: 'button'
};
