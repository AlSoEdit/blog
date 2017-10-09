'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import b_ from '../../../libs/b_';
import { defaultSubmitText } from '../../../constants/uiText';

import './Form.css';
import Button from '../Button/Button';
import Input from "../TextField/TextField";

const b = b_.lock('form');

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        const { inputsSettings } = this.props.formSettings;
        const inputsValues = inputsSettings
            .reduce((acc, i) => Object.assign(acc, { [i.name]: '' }), {});

        this.state = {
            inputsValues
        };
    }

    handleChange(e) {
        const { name, value } = e.target;
        const { inputsValues } = this.state;

        this.setState({
            inputsValues: Object.assign({}, inputsValues, { [name]: value })
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const { inputsValues } = this.state;

        this.props.onSubmit(inputsValues);
    }

    render() {
        const { formSettings: { inputsSettings, submitText, title } } = this.props;
        const { inputsValues } = this.state;
        const inputs = inputsSettings.map(i =>
            <Input
                key={i.name}
                inputData={i}
                handleChange={this.handleChange}
                value={inputsValues[i.name]}
            />
        );

        return (
            <form className={b()} onSubmit={this.onSubmit}>
                <div className={b('inner')}>
                    <p className={b('title')}>{title}</p>

                    {inputs}

                    <div className={b('button-wrapper')}>
                        <Button
                            buttonText={submitText || defaultSubmitText}
                            type={'submit'}
                            color={'black'}
                        />
                    </div>
                </div>
            </form>
        );
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formSettings: PropTypes.shape({
        title: PropTypes.string,
        submitText: PropTypes.string,
        inputsSettings: PropTypes.arrayOf(
            PropTypes.shape({
                type: PropTypes.string,
                name: PropTypes.string.isRequired,
                placeholder: PropTypes.string.isRequired
            })
        ).isRequired
    }).isRequired
};
