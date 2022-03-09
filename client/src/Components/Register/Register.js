import React, {useEffect, useState} from 'react'
import logo from '../../assets/3.png';

import '../../Styles/Register.css';

const Register = () => {

    const [register, setRegister] = useState({
        nombre:'',
        username:'',
        email:'',
        password_:''
    })
//cambio

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
   const res =   await  fetch('http://localhost:5000/signUp', {
            method: 'POST',
            body:JSON.stringify(register),
            headers: {'Content-Type': 'application/json' }
        })
        const data = await res.json()
        console.log(data)
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
       <input name='nombre' onChange={handleChange}  className="input" type="text" placeholder="Nombre"></input>
            <input name='username'  onChange={handleChange} className="input" type="text" placeholder="Usuario"></input>
            <input name='email'  onChange={handleChange} className="input" type="email" placeholder="Correo"></input>
            <input name='password_'  onChange={handleChange} className="input" type="password" placeholder="Contraseña"></input>
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
