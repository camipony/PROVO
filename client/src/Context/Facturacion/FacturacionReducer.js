import {
    AGREGAR_FACTURA,
    OBTENER_FACTURAS,
    OBTENER_FACTURAS_ACTIVA
} from '../type'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    const {payload, type} = action;

    switch(type){
        case AGREGAR_FACTURA:
            return {
                ...state,
                activeToggle: payload
            }
        case OBTENER_FACTURAS:
            return {
                ...state,
                facturas: payload
            }
        case OBTENER_FACTURAS_ACTIVA:
            return {
                ...state,
                dtfacturaActiva: payload
            }
        default:
            return state;
    }
}