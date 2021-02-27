import {
	Card,
	CardContent,
	FormControl,
	Grid,
	Input,
	InputLabel,
} from '@material-ui/core';
import React from 'react';

const Form = () => {
	return (
		<Grid item xs={12} sm={8} md={6}>
			<Card elevation={4}>
				<CardContent>
					<FormControl fullWidth>
						<InputLabel htmlFor='email'>Email address</InputLabel>
						<Input id='email' />
					</FormControl>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default Form;
