import React, {useEffect, useState, useContext} from 'react'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import logo from '../../assets/3.png';

/* Context */
import UserContext from '../../Context/User/UserContext';

import '../../Styles/Register.css';

const Register = () => {

    const userContext = useContext(UserContext);
  	const {verificarAutenticada} = userContext;

	const navigate = useNavigate();

    const [register, setRegister] = useState({
        nombre:'',
        username:'',
        email:'',
        password:''
    })

    useEffect(() => {

		const elem = window.localStorage.getItem('usuario')
        const dato = elem ? JSON.parse(elem) : null

		if(dato){
			verificarAutenticada();
			navigate("/dashboard");
			return <></>
		}

	}, [])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        console.log(register);
        
        const res =   await  fetch('https://provo-backend.herokuapp.com/usuarios', {
            method: 'POST',
            body: JSON.stringify(register),
            headers: {'Content-Type': 'application/json' }
        })
        const data = await res.json()
        console.log(data)
        
        Swal.fire({
            icon: 'success',
            title: 'Usuario Creado Con exito',
            showConfirmButton: false,
            timer: 3000,
        }).then(function() {
            navigate("/login");
        });

    };

    const handleChange = (e) =>{
        setRegister({...register,[e.target.name]: e.target.value});
    }

    return (
        <div>
             <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300&display=swap" rel="stylesheet"></link>
   <body>
   <header className="header">
        <img className="header__img" src={logo} alt=""></img>
    </header>
    <section className="Register">
    <section className="Register__container">
    <h2 className="regis">Registrate</h2>
       <div className="profile icon"></div>
       <div className="profile icon2"></div>
       <div className="arrow-right icon"></div>
       <div className="mail icon"></div>
       <div className="key2 icon"></div>
       <form className="Register__container--form" onSubmit={handleSubmit}>
            <input 
                name='nombre' 
                onChange={handleChange}  
                className="input" 
                type="text" 
                placeholder="Nombre"
                value={register.nombre}
                required></input>
            <input 
                name='username'  
                onChange={handleChange} 
                className="input" 
                type="text" 
                placeholder="Usuario"
                value={register.username}
                required></input>
            <input 
                name='email'  
                onChange={handleChange} 
                className="input" 
                type="email" 
                placeholder="Correo"
                value={register.email}
                required></input>
            <input 
                name='password'  
                onChange={handleChange} 
                className="input" 
                type="password" 
                placeholder="Contraseña"
                value={register.password}
            required></input>
            <button className="button">Registrarme</button>
       </form>
       <p className="Register__container--registro"><a href="/login">¿Ya tienes cuenta?Inicia sesion</a></p>

    </section>
    </section>
    
   </body>

        </div>
    )
}

export default Register

