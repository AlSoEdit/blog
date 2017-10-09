'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CenteredWrapper from '../CenteredWrapper/CenteredWrapper';
import ButtonLink from '../Button/Button';

import './Error.css';

export default class ErrorPage extends Component {
    render() {
        const { text } = this.props;

        return (
            <CenteredWrapper>
                <div className="error">
                    <div className="error__inner">
                        <p className="error__text">{text}</p>
                        <ButtonLink buttonText={'Blog feed'} linkUrl={'/'}/>
                    </div>
                </div>
            </CenteredWrapper>
        );
    }
}

ErrorPage.propTypes = {
    text: PropTypes.string.isRequired
};
