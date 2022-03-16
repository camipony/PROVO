import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

import '../../Styles/Facturacion/FacturaActiva.css'
import '../../Styles/Facturacion/mediaFacturacion.css'

import FacturacionContext from '../../Context/Facturacion/FacturacionContext';

export default function CrearFacturas(props) {

  const navigate = useNavigate();

  let [state, setState] = useState({
    codigoTendero: ""
  });

  let [confirmarCompra, setConfirmar] = useState(false)

  const facturacionContext = useContext(FacturacionContext);
  const {
    updateItemFactura, 
    updateFactura, 
    dtfacturaActiva, 
    obtenerFacturaActiva, 
    confirmarCompraFactura,
    deleteItemFactura
  } = facturacionContext

  let [list, setList] = useState([]);
  let [factura, setFactura] = useState(null);

  let [ampliarDF, setAmpliarDF] = useState(false);
  let [ampliarDT, setAmpliarDT] = useState(false);

  const elem = window.localStorage.getItem('usuario')
  let usuario = elem ? JSON.parse(elem) : null

  useEffect(() => {
    obtenerFacturaActiva(usuario.id);
    
    if( dtfacturaActiva ){
      setFactura(dtfacturaActiva[0])
      setList( dtfacturaActiva[0].item )
    }
    
    if( factura !== null && !confirmarCompra ){
      updateFactura(factura.id, {activa: true})
    }
  }, [obtenerFacturaActiva, usuario.id, dtfacturaActiva, factura, confirmarCompra, updateFactura])
    

  const obtenerFecha = () => {
    var hoy =  new Date()
    var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear()
    var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    return fecha +  " " + hora
  }

  const onChage = e => {
    setState({
      [e.target.name] : e.target.value
    })
  }

  const actualizarLista = ( accion, dato ) => {
    if( accion === 'inc' ){
      updateItemFactura(dato.id, {
        cantidad_producto: dato.cantidad_producto + 1
      })
    }
    else if( accion === 'dec' ){
      updateItemFactura(dato.id, {
        cantidad_producto: dato.cantidad_producto - 1
      })
    }
    else if( accion === 'del' ){
      deleteItemFactura(dato.id)
    }
  }

  const confirmarcomprabtn = () => {
    props.activeGenereFactura()
    setConfirmar(true)
    updateFactura(factura.id, {activa: false})
    confirmarCompraFactura(usuario.id)
    Swal.fire({
      icon: 'error',
      title: ' Debes iniciar secion ',
      showConfirmButton: false,
      timer: 3000,
    }).then(function() {
        navigate("/facturacion");
    });
  }

  return <div className='ModalContainer'>
    <div className='modalFact'>
      <div className='contTop'>
        <button onClick={props.activeGenereFactura}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
      <div className='contBody'>
        <div className='zonaData'>
          <div className={ ampliarDT ? "contDataStore active" : "contDataStore" }>
            <div className='headDataDetail'>
              <button onClick={() => setAmpliarDT( ampliarDT = !ampliarDT )}>
                { ampliarDT ? <ion-icon name="caret-down-outline"></ion-icon> 
                                  : <ion-icon name="caret-up-outline"></ion-icon> }
              </button>
              <h1>Detalles  Tienda</h1>
            </div>            
            <p className='nameStore'>{'Nombre: ' + usuario.username }</p>
            <p className='phoneStore'>Tel: ####### </p>
            <input 
              type="text" 
              name="codigoTendero"
              placeholder='Codigo Tendero'
              onChange={onChage}
              value={state.codigoTendero} />
            
          </div>
          <div className={ ampliarDF ? "contDataFactura active" : "contDataFactura" }>
            <div className='headDataDetail'>
              <button onClick={() => setAmpliarDF( ampliarDF = !ampliarDF )}>
                { ampliarDF ? <ion-icon name="caret-down-outline"></ion-icon> 
                                  : <ion-icon name="caret-up-outline"></ion-icon> }
              </button>
              <h1>Detalles  Factura</h1>
            </div>
            <p className='dateFact'>{ "Fecha: " + obtenerFecha() }</p>
            <p className='totalProductFact'>{ factura !== null ? 'Total Productos: ' + factura.total_productos : 'Total Productos: '}</p>
            <p className='totalPagarFact'> { factura !== null ? 'Total a Pagar: ' + factura.total_a_pagar : 'Total a Pagar: '}</p>
          </div>
        </div>
        <div className='zonaList'>
          <div className='headList'>
            <div className='trData'>
              <p className='idProducto'>ID</p>
              <p className='nameProducto'>Producto</p>
              <p className='cantidadProducto'>Cantidad</p>
              <p className='precioProducto'>Precio</p>
              <p className='precioTotal'>Total</p>
              <p className='accionesProducto'> Acciones</p>
            </div>
            </div>
            <div className='bodyList'>
              { list 
                ? list.map( dato => {
                    return <div className='trData' key={dato.id}>
                        <p className='idProducto'>{dato.id}</p>
                        <p className='nameProducto'>{dato.nombre}</p>
                        <p className='cantidadProducto'>{dato.cantidad_producto}</p>
                        <p className='precioProducto'>{dato.precio}</p>
                        <p className='precioTotal'>{dato.cantidad_producto*dato.precio}</p>
                        <div className='accionesProducto'>
                          <button className='incBtn' onClick={() => {
                            actualizarLista('inc', dato)
                          }}>
                            +
                          </button>
                          <button className='decBtn' onClick={() => {
                            actualizarLista('dec', dato)
                          }}>
                            -
                          </button>
                          <button className='delBtn' onClick={() => {
                            actualizarLista('del', dato)
                          }}>
                            <ion-icon name="trash-outline"></ion-icon>
                          </button>
                        </div>
                      </div>
                  })
                :''}
              </div>
        </div>
      </div>
      <div className='contFooter'>
        <h1>{factura !== null ? '# Factura: ' + factura.id : '# Factura: '}</h1>
        <button onClick={() => {
          confirmarcomprabtn()
        }}>
          CONFIRMAR
        </button>
      </div>
    </div>
  </div>;
}
