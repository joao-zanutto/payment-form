import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import FormInput from './FormInput';

const styles = {
	Title: {
		padding: 40,
	},

	Button: {
		margin: 20,
	},
};

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
					<Typography variant='h6' style={styles.Title}>
						{' '}
						Pague agora
					</Typography>
					<Grid container justify='center' spacing={2}>
						<Grid item xs={10}>
							<FormInput
								value={fields.cardNumber}
								field='cardNumber'
								handleChange={handleChange}>
								Número do cartão
							</FormInput>
						</Grid>
						<Grid item xs={10}>
							<FormInput
								value={fields.cardName}
								field='cardName'
								handleChange={handleChange}>
								Nome impresso no cartão
							</FormInput>
						</Grid>
						<Grid item xs={10}>
							<FormInput
								value={fields.cpf}
								field='cpf'
								handleChange={handleChange}>
								CPF do Titular
							</FormInput>
						</Grid>
						<Grid item xs={5}>
							<FormInput
								value={fields.cvv}
								field='cvv'
								handleChange={handleChange}>
								CVV
							</FormInput>
						</Grid>
						<Grid item xs={5}>
							<FormInput
								value={fields.dueDate}
								field='dueDate'
								handleChange={handleChange}>
								Validade do Cartão
							</FormInput>
						</Grid>
						<Grid item xs={8} />
						<Grid item>
							<Button variant='contained' color='primary' style={styles.Button}>
								{' '}
								Pagar{' '}
							</Button>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default Form;
