import {
    AUTENTICAR_USUARIO_CORRECTA,
    AUTENTICAR_USUARIO_ERROR
} from '../type'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    const {payload, type} = action;

    switch(type){
        case AUTENTICAR_USUARIO_CORRECTA:
            return {
                ...state,
                usuarioAutenticado: true,
                datoUsuario: payload
            }
        case AUTENTICAR_USUARIO_ERROR:
            return {
                ...state,
                usuarioAutenticado: false,
                datoUsuario: []
            }
        default:
            return state;
    }
}