import React, {useReducer} from 'react';
import axios from 'axios'

import UserContext from './UserContext';
import UserReducer from './UserReducer';

const UserState = (props) => {

    const inicialState = {
        usuarioAutenticado: false,
        datoUsuario: []
    }

    const [state, dispatch] = useReducer(UserReducer, inicialState)

    const autenticarUsuario = async ( dato ) => {
        try{

            const res = await axios.get(''+ dato.username+'/'+ dato.password); 
            if( res.data ){
                dispatch({
                    type: 'AUTENTICAR_USUARIO_CORRECTA',
                    payload: res.data
                })
            }
            else{
                dispatch({
                    type: 'AUTENTICAR_USUARIO_ERROR',
                    payload: res.data
                })
            }            

        }catch(e){
            state.error = true;
            console.log(e)
        }
    }

    return <UserContext.Provider value = {{
        usuarioAutenticado: state.usuarioAutenticado,
        datoUsuario: state.datoUsuario,
        autenticarUsuario
    }} >
        {props.children}
    </UserContext.Provider>
}

export default UserState