import React, {useReducer} from 'react'

import FacturacionContext from './FacturacionContext'
import FacturacionReducer from './FacturacionReducer'

const FacturarionState = (props) => {
    const inicialState = {
        facturas: [],
        error: false,
        loading: false
    }

    const [state, dispatch] = useReducer(FacturacionReducer, inicialState)

    const obtenerFacturas = (idUsuario) => {
        try {
            dispatch({
                type: 'OBTENER_FACTURAS',
                payload: []
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: 'ERROR_FACTURAS',
                payload: true
            })
        }
        finally{
            dispatch({
                type: 'LOADING_FACTURAS',
                payload: true
            })
        }
    }

    const obtenerFactura = (id) => {
        try {
            dispatch({
                type: 'OBTENER_FACTURA',
                payload: []
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: 'ERROR_FACTURAS',
                payload: true
            })
        }
        finally{
            dispatch({
                type: 'LOADING_FACTURAS',
                payload: true
            })
        }
    }

    const guardarFactura = () => {
        try {
            dispatch({
                type: 'GUARDAR_FACTURA',
                payload: []
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <FacturacionContext.Provider value={{
            facturas: state.facturas,
            error: state.error,
            loading: state.loading,
            obtenerFacturas
        }} >
            {props.children}
        </FacturacionContext.Provider>
    )

}

export default FacturarionState