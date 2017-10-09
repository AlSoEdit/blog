'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Form.css';
import Button from "../Button/Button";

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

        this.props.onSubmit({ inputsValues });
    }

    render() {
        const { onSubmit, formSettings: { inputsSettings, submitText, title } } = this.props;
        const { inputsValues } = this.state;
        const inputs = inputsSettings.map(s =>
            s.isTextArea
                ? <textarea
                    className="form__textarea"
                    placeholder={s.placeholder}
                    onChange={this.handleChange}
                    required={s.required}
                    name={s.name}
                    key={s.name}
                    value={inputsValues[s.name]}
                />
                : <input
                    className="form__input"
                    type={s.type || 'text'}
                    placeholder={s.placeholder}
                    onChange={this.handleChange}
                    required={s.required}
                    name={s.name}
                    key={s.name}
                    value={inputsValues[s.name]}
                />
        );

        return (
            <form className="form" onSubmit={onSubmit}>
                <div className="form__inner">
                    <p className="form__title">{title}</p>

                    {inputs}

                    <div className="form__button-wrapper">
                        <Button
                            buttonText={submitText || 'Submit'}
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
