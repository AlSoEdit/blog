'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Button.css';

export default class Button extends Component {
    render() {
        const { buttonText, linkUrl, onClick, color, type } = this.props;
        const buttonColorClass = `${color && ` button__items--color-${color}` || ''}`;
        const items = (
            <div className={`button__items${buttonColorClass}`} onClick={onClick}>
                {this.props.children}
                <p className="button__text">{buttonText}</p>
            </div>
        );

        return (
            <div className={'button'}>
                {
                    linkUrl
                        ? <Link className="button__link" to={linkUrl}>
                            { items }
                        </Link>
                        : <button className="button__btn" type={type}>
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
