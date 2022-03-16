import React, {useReducer} from 'react';
import axios from 'axios'

import UserContext from './UserContext';
import UserReducer from './UserReducer';

const UserState = (props) => {

    const inicialState = {
        usuarioAutenticado: false,
        cargando: false,
        datoUsuario: null
    }

    const [state, dispatch] = useReducer(UserReducer, inicialState);

    const obtenerUsuario = async ( id ) => {
        state.cargando = true;
        state.usuarioAutenticado = false;
        state.datoUsuario = null;
        try {
            const res = await axios.get('https://provo-backend.herokuapp.com/'+id);

            if( res.data.length > 0 ){
                dispatch({
                    type: 'OBTENER_USUARIO',
                    payload: res.data[0]
                })  
            }
            else{
                dispatch({
                    type: 'NO_EXISTE_USUARIO',
                    payload: null
                })
            }

        } catch (error) {
            
        }
        finally{
            state.cargando = false;
        }
    }

    const autenticarUsuario = async ( dato ) => {
        state.cargando = true;        
        state.usuarioAutenticado = false;
        try{

            const res = await axios.post('https://provo-backend.herokuapp.com/autenticar-usuario/', dato); 
            
            if( res.data.length > 0 ){

                state.usuarioAutenticado = true;
                state.datoUsuario = res.data[0];
                
                dispatch({
                    type: 'AUTENTICAR_USUARIO',
                    payload: res.data[0]
                }) 

            }
            else{
                dispatch({
                    type: 'NO_EXISTE_USUARIO',
                    payload: null
                })
            }
                    

        }catch(e){
            state.error = true;
            console.log(e)
        }
        finally{
            state.cargando = false;
        }
    }

    const verificarAutenticada = () => {
        const elem = window.localStorage.getItem('usuario')
        const dato = elem ? JSON.parse(elem) : null

        if( dato != null ){
            const datoautenticar = {
                usuario: dato.email,
                password: dato.password
            }
            autenticarUsuario(datoautenticar);
        }
        else{
            state.usuarioAutenticado = false;
        }
    }

    const darDatos = (datos) => {
        window.localStorage.setItem('usuario', JSON.stringify(datos));
        dispatch({
            type: 'AUTENTICAR_USUARIO',
            payload: datos
        }) 
    }

    const cerrarSecion = () => {
        try {
            window.localStorage.removeItem('usuario');
        } catch (error) {
            console.log(error)
        }
        state.cargando = true;
        state.datoUsuario = [];
        state.usuarioAutenticado = false;
    }

    return <UserContext.Provider value = {{
        usuarioAutenticado: state.usuarioAutenticado,
        datoUsuario: state.datoUsuario,
        cargando: state.cargando,
        autenticarUsuario,
        obtenerUsuario,
        verificarAutenticada,
        cerrarSecion,
        darDatos
    }} >
        {props.children}
    </UserContext.Provider>
}

export default UserState