import React, {useReducer} from 'react'
import axios from 'axios'

import FacturacionContext from './FacturacionContext'
import FacturacionReducer from './FacturacionReducer'

const FacturarionState = (props) => {
    const inicialState = {
        facturas: [],
        dtfacturaActiva: [],
        loadingActive: false,
        facturaActiva: false,
        loading: false
    }

    const [state, dispatch] = useReducer(FacturacionReducer, inicialState)

    const obtenerFacturas = async (idUsuario) => {
        try {

            const res = await axios.get('https://provo-backend.herokuapp.com/historia-facturas/'+idUsuario);

            dispatch({
                type: 'OBTENER_FACTURAS',
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
        finally{
            dispatch({
                type: 'LOADING_FACTURAS',
                payload: true
            })
        }
    }

    const obtenerFacturaActiva = async (idUsuario) => {
        try {

            const res = await axios.get('https://provo-backend.herokuapp.com/factura-activa/'+idUsuario);

            dispatch({
                type: 'OBTENER_FACTURAS_ACTIVA',
                payload: res.data
            })

        } catch (error) {
            console.log(error);
        } finally {
            state.loadingActive = false
        }
    }

    const confirmarCompraFactura = async (id) => {
        try {

            await axios.post('https://provo-backend.herokuapp.com/facturas', {
                id_usuario: id
            })

        } catch (error) {
            console.log(error);
        }
    }

    const addItemFactura = async (dato) => {
        try{
            await axios.post('https://provo-backend.herokuapp.com/item-factura/', dato)
        } catch (error) {
            console.log(error);
        }
    }

    const deleteItemFactura = async (id) => {
        try{

            await axios.delete('https://provo-backend.herokuapp.com/item-facturas/'+id);

        } catch (error) {
            console.log(error);
        }
    }

    const updateFactura = async (id, estadoFactura) => {
        try{

            await axios.put('https://provo-backend.herokuapp.com/facturas/'+id, estadoFactura);
            
        } catch (error) {
            console.log(error);
        }
    }

    const updateItemFactura = async (id, newProduct) => {
        try{

            await axios.put('https://provo-backend.herokuapp.com/item-facturas/'+id, newProduct);

        } catch (error) {
            console.log(error);
        }
    }

    const vaciarFactura = (items) => {
        try{

            items.map( async item => {
                await axios.delete('https://provo-backend.herokuapp.com/item-facturas/'+item.id);
            })

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
            dtfacturaActiva: state.dtfacturaActiva,
            facturaActiva: state.facturaActiva,
            loading: state.loading,
            obtenerFacturas,
            addItemFactura,
            deleteItemFactura,
            updateItemFactura,
            updateFactura,
            confirmarCompraFactura,
            vaciarFactura,
            obtenerFacturaActiva
        }} >
            {props.children}
        </FacturacionContext.Provider>
    )

}

export default FacturarionState