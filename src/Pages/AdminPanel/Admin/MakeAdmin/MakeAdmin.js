import React, { useState } from 'react';
import { Alert, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';


const MakeAdmin = () => {
	const [email, setEmail] = useState('');
	const [success, setSuccess] = useState(false);

	const handleOnBlur = e => {
		setEmail(e.target.value);
	}

	const handleAdminSubmit = e => {

		const user = { email };
		fetch('http://localhost:5000/users/admin', {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(user)
		})
			.then(res => res.json())
			.then(data => {
				// setEmail('');
				setSuccess(true);
			});

		e.preventDefault();
	}

	return (
		<Box sx={{ textAlign: 'center' }}>
			<h1>Make Admin</h1>

			{success && <Alert severity="success">Made Admin Successfully!</Alert>}

			<form onSubmit={handleAdminSubmit}>
				<TextField
					// fullWidth
					name="admin"
					id="admin"
					label="Email"
					variant="outlined"
					onBlur={handleOnBlur}
				/>
				<br />
				<Button type="submit" variant="contained">Make Admin</Button>
			</form>
		</Box>
	);
};

export default MakeAdmin;