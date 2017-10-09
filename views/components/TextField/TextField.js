
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import b_ from '../../../libs/b_';

import './TextField.css';

const b = b_.lock('text-field');

export default class TextField extends Component {
    render() {
        const { inputData, value, handleChange } = this.props;
        const { placeholder, required, name, type } = inputData;

        return (
            <div className={b()}>
                {
                    inputData.isTextArea
                        ? <textarea
                            className={b('textarea')}
                            placeholder={placeholder}
                            onChange={handleChange}
                            required={required}
                            name={name}
                            key={name}
                            value={value}
                        />
                        : <input
                            className={b('input')}
                            type={type || 'text'}
                            placeholder={placeholder}
                            onChange={handleChange}
                            required={required}
                            name={name}
                            key={name}
                            value={value}
                        />
                }
            </div>
        );
    }
}

TextField.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    inputData: PropTypes.shape({
        type: PropTypes.string,
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        required: PropTypes.bool
    }).isRequired
};
