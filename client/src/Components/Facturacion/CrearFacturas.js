import React, { useState } from 'react';

import '../../Styles/Facturacion/FacturaActiva.css'
import '../../Styles/Facturacion/mediaFacturacion.css'

const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

export default function CrearFacturas(props) {

  let [state, setState] = useState({
    codigoTendero: ""
  });
  
  let [ampliarDF, setAmpliarDF] = useState(false);
  let [ampliarDT, setAmpliarDT] = useState(false);

  const obtenerFecha = () => {
    var hoy =  new Date()
    var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear()
    var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    return fecha +  " " + hora
  }

  const obtenerPago = () => {
    return 5000
  }

  const onChage = e => {
    setState({
      [e.target.name] : e.target.value
    })
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
            <p className='nameStore'>Nombre: PROVO STORE </p>
            <p className='phoneStore'>Tel: 3556428 </p>
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
            <p className='totalProductFact'> Total Productos: 500 </p>
            <p className='totalPagarFact'> Total a Pagar: 2000015 </p>
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
              {list.map(() => {
                return <div className='trData' key={list}>
                    <p className='idProducto'>ID</p>
                    <p className='nameProducto'>Producto</p>
                    <p className='cantidadProducto'>Cantidad</p>
                    <p className='precioProducto'>Precio</p>
                    <p className='precioTotal'>Total</p>
                    <div className='accionesProducto'>
                      <button className='incBtn'>
                        +
                      </button>
                      <button className='decBtn'>
                        -
                      </button>
                      <button className='delBtn'>
                        <ion-icon name="trash-outline"></ion-icon>
                      </button>
                    </div>
                  </div>
                })}
              </div>
        </div>
      </div>
      <div className='contFooter'>
        <h1># Factura: 0000001</h1>
        <button onClick={props.activeGenereFactura}>
          CONFIRMAR
        </button>
      </div>
    </div>
  </div>;
}
