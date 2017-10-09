'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CenteredWrapper.css';

export default class CenteredWrapper extends Component {
    render() {
        return (
            <div className="centered-wrapper">
                <div className="centered-wrapper__inner centered-wrapper__inner--direction-column">
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