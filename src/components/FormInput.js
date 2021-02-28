import { FormControl, TextField } from '@material-ui/core';
import React from 'react';

const FormInput = ({ value, field, handleChange, children }) => {
	return (
		<FormControl fullWidth>
			<TextField
				autoComplete='new-password'
				id={field}
				value={value}
				onChange={handleChange}
				name={field}
				variant='outlined'
				label={children}
			/>
		</FormControl>
	);
};

export default FormInput;
