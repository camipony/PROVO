import {
    AGREGAR_FACTURA
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
        default:
            return state;
    }
}