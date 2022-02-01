import React, { useState } from 'react';
import { Grid, Container, TextField, Button, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import '../../Styles/login.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import Home from '../../Components/Home/Home'

const useStyles = makeStyles(theme => ({
	root: {
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100vh',
	},
	container: {
		opacity: '0.85',
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
		//position: 'relative',
		color: 'white',
		//top: '10%',
		marginTop: theme.spacing(9),
		
	},
	button: {
		bgColor: 'white',
		margin: theme.spacing(2, 0, 2)
	}
}))


const toHome = () => {
	<Home/>
}

const Login = () => {

	window.document.title = 'Login';
	const [body, setBody] = useState({ username: '', password: '' })
	const classes = useStyles()
	
	const handleChange = (e) => {
		setBody({...body,[e.target.name]: e.target.value});
		//console.log(body);
	}

	const handleSubmit = async (e) =>{
        e.preventDefault();
		var yes = false;
        console.log(body);
		try{
            const res = await axios.get('http://localhost:2000/login/'+ body.username+'/'+body.password); 
			if(res.data.length > 0){
				Swal.fire({
					icon: 'success',
					title: 'Bienvenido a PROVO '+body.username,
					showConfirmButton: false,
					timer: 3000,
				}).then(function() {
					window.location = "/dashboard";
				});
			}else{
				Swal.fire({
					icon: 'error',
					title: 'No estás registrado',
					showConfirmButton: false,
					timer: 2000,
				});	
			}        
        }catch(e){
            console.log(e)
        }
		console.log(yes);
		if(yes == false){
			
			toHome();
		}
    };


	const commonStyles = {
		bgcolor: 'transparent',
		borderRadius: 5,
		m: 1.8,
		border: 2,
		borderColor: 'white',
		width: '20rem',
		height: '27rem'
	};


	return (
		<Grid container component='main' className={classes.root} className= "HideOnMobile" className="all">
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
									name='username'
									value={body.username}
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
									onClick={(e) => handleSubmit(e)}
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
