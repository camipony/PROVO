import {
    AGREGAR_FACTURA,
    OBTENER_FACTURAS,
    OBTENER_FACTURAS_ACTIVA,
    ELIMINAR_ITEM,
    ACTUALIZAR_ITEM
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
                dtfacturaActiva: payload,
                itemFacturaActiva: payload[0].item
            }
        case ELIMINAR_ITEM:
            return {
                ...state,
                itemFacturaActiva: state.itemFacturaActiva.filter( item => item !== payload )
            }
        case ACTUALIZAR_ITEM:
            return {
                ...state,
                itemFacturaActiva: state.itemFacturaActiva.map( item => {
                    if( payload.id === item.id ){
                        return {
                            ...item,
                            cantidad_producto: payload.cantidad
                        }
                    }
                    return item
                } )
            }
        default:
            return state;
    }
}