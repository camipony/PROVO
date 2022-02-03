import React, {useReducer} from 'react'

import FacturacionContext from './FacturacionContext'
import FacturacionReducer from './FacturacionReducer'

const FacturarionState = (props) => {
    const inicialState = {
        facturas: [],
        productoFactura: [],
        facturaActiva: false,
        error: false,
        loading: false
    }

    const [state, dispatch] = useReducer(FacturacionReducer, inicialState)

    const obtenerFacturas = (idUsuario) => {
        try {
            dispatch({
                type: 'OBTENER_FACTURAS',
                payload: idUsuario
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
                payload: id
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

    const addProductoFactura = () => {
        try{
            dispatch({
                type: '',
                payload: []
            })
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProductoFactura = () => {
        try{
            dispatch({
                type: '',
                payload: []
            })
        } catch (error) {
            console.log(error);
        }
    }

    const updateProductoFactura = (newProduct) => {
        try{
            dispatch({
                type: '',
                payload: newProduct
            })
        } catch (error) {
            console.log(error);
        }
    }

    const vaciarProductoFactura = () => {
        try{
            dispatch({
                type: '',
                payload: []
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <FacturacionContext.Provider value={{
            facturas: state.facturas,
            productoFactura: state.productoFactura,
            facturaActiva: state.facturaActiva,
            error: state.error,
            loading: state.loading,
            obtenerFacturas,
            obtenerFactura,
            addProductoFactura,
            deleteProductoFactura,
            updateProductoFactura,
            guardarFactura,
            vaciarProductoFactura
        }} >
            {props.children}
        </FacturacionContext.Provider>
    )

}

export default FacturarionState