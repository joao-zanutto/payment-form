import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import FormInput from './FormInput';

const Form = () => {
	const [fields, setFields] = useState({});

	const handleChange = (e) => {
		const value = e.target.value;
		setFields({ ...fields, [e.target.name]: value });
	};

	return (
		<Grid item xs={12} sm={8} md={6}>
			<Card elevation={3}>
				<CardContent>
					<Typography variant='h6'> Pague agora</Typography>
					<Grid container justify='center' spacing={1}>
						<Grid item sm={10}>
							<FormInput
								value={fields.cardNumber}
								field='cardNumber'
								handleChange={handleChange}>
								Número do cartão
							</FormInput>
						</Grid>
						<Grid item sm={10}>
							<FormInput
								value={fields.cardName}
								field='cardName'
								handleChange={handleChange}>
								Nome impresso no cartão
							</FormInput>
						</Grid>
						<Grid item sm={5}>
							<FormInput
								value={fields.cvv}
								field='cvv'
								handleChange={handleChange}>
								CVV
							</FormInput>
						</Grid>
						<Grid item sm={5}>
							<FormInput
								value={fields.dueDate}
								field='dueDate'
								handleChange={handleChange}>
								Validade do Cartão
							</FormInput>
						</Grid>
					</Grid>
					<p> {JSON.stringify(fields, null, 2)}</p>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default Form;
