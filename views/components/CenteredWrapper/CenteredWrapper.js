'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import b_ from '../../../libs/b_';

import './CenteredWrapper.css';

const b = b_.lock('centered-wrapper');

export default class CenteredWrapper extends Component {
    render() {
        return (
            <div className={b()}>
                <div className={b('inner', { direction: 'column' })}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

CenteredWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]).isRequired
};