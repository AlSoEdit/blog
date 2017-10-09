'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import b_ from '../../../libs/b_';

import CenteredWrapper from '../CenteredWrapper/CenteredWrapper';
import ButtonLink from '../Button/Button';

import './Error.css';

const b = b_.lock('error');

export default class ErrorPage extends Component {
    render() {
        const { text } = this.props;

        return (
            <CenteredWrapper>
                <div className={b()}>
                    <div className={b('inner')}>
                        <p className={b('text')}>{text}</p>
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
