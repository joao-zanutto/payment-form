import { FormControl, Input, InputLabel } from '@material-ui/core';
import React from 'react';

const FormInput = ({ value, field, handleChange, children }) => {
	return (
		<FormControl fullWidth>
			<InputLabel htmlFor='cardNumber'> {children} </InputLabel>
			<Input
				autoComplete='new-password'
				id={field}
				value={value}
				onChange={handleChange}
				name={field}
			/>
		</FormControl>
	);
};

export default FormInput;
