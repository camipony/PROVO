import {
    OBTENER_USUARIO,
    AUTENTICAR_USUARIO,
    ACTUALIZAR_USUARIO,
    CAMBIAR_CLAVE_USUARIO,
    NO_EXISTE_USUARIO
} from '../type'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    const {payload, type} = action;

    switch(type){
        case OBTENER_USUARIO:
            return {
                ...state,
                usuarioAutenticado: true,
                datoUsuario: payload
            }
        case AUTENTICAR_USUARIO:
            return {
                ...state,
                usuarioAutenticado: true,
                datoUsuario: payload
            }
        case NO_EXISTE_USUARIO:
            return {
                ...state,
                usuarioAutenticado: false,
                datoUsuario: payload
            }
        case ACTUALIZAR_USUARIO:
            return {
                ...state,
                usuarioAutenticado: false,
                datoUsuario: payload
            }
        case CAMBIAR_CLAVE_USUARIO:
            return {
                ...state,
                usuarioAutenticado: false,
                datoUsuario: payload
            }
        default:
            return state;
    }
}