import React, { useState } from 'react';
import { Grid, Container, TextField, Button, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import '../../Styles/login.css';


const useStyles = makeStyles(theme => ({
	root: {
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100vh',
	},

	container: {
		opacity: '0.8',
		marginTop: theme.spacing(8),
		[theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
			marginTop: 0,
			width: '100%',
			height: '100%'
		}
	},

	div: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},

	form: {
		width: '80%',
		color: 'white',
		marginTop: theme.spacing(10)
	},
	button: {
		bgColor: 'white',
		margin: theme.spacing(2, 0, 2)
	}
}))



const Login = () => {
	const [body, setBody] = useState({ nickname: '', password: '' })
	const classes = useStyles()


	const handleChange = e => {
		setBody({
			...body,
			[e.target.name]: e.target.value
		})

	}

	const onSubmit = () => {
		console.log(body)
		
	}


	const commonStyles = {
		bgcolor: 'transparent',
		borderRadius: 5,
		m: 6,
		border: 2,
		borderColor: 'white',
		width: '20rem',
		height: '27rem'
	};


	return (

		<Grid container component='main' className={classes.root}>
			<CssBaseline />
			<Container maxWidth='xs' className={classes.container}>
				<div className="efect">
				<div className="title">¡Bienvenido a provo!</div>
				<br></br>

					<Box sx={{ ...commonStyles }} >
						<div className={classes.div}>
							<span className="cout">
								<div className="cins"></div>
							</span>
							
							<form className={classes.form}>
								<TextField
									fullWidth
									AutoFocused
									color='secondary'
									margin='normal'
									variant='outlined'
									label='Nickname'
									name='nickname'
									value={body.nickname}
									onChange={handleChange}
								/>
								<TextField
									fullWidth
									type='password'
									color='secondary'
									margin='normal'
									variant='outlined'
									label='Password'
									name='password'
									value={body.password}
									onChange={handleChange}
								/>
								<Button
									fullWidth
									variant='contained'
									color='secondary'
									className={classes.button}
									onClick={() => onSubmit()}
								>Sign In</Button>
								<div className= "white"><a href='/forgot' >Olvidé mi contraseña.</a>
								<br></br>
								<a href='/signin' >¡Registrarme!</a></div>
							</form>
						</div>
					</Box>
				</div>
			</Container>

		</Grid>

	)
}

export default Login
