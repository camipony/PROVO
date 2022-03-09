import React, { useState } from 'react';

import '../../Styles/Facturacion/FacturaActiva.css'
import '../../Styles/Facturacion/mediaFacturacion.css'

let listProduct = [
  {
    id: 1,
    nombre: 'Platano',
    fecha: '',
    cantidad: 1,
    precio: 500,
  },
  {
    id: 2,
    nombre: 'Arroz',
    fecha: '',
    cantidad: 1,
    precio: 1600,
  },
  {
    id: 3,
    nombre: 'Papita Margarita',
    fecha: '',
    cantidad: 1,
    precio: 2500,
  },
  {
    id: 4,
    nombre: 'Libra de Sal',
    fecha: '',
    cantidad: 1,
    precio: 2000,
  },
  {
    id: 5,
    nombre: 'Lapicero',
    fecha: '',
    cantidad: 1,
    precio: 1000,
  }  
]

export default function CrearFacturas(props) {

  let [state, setState] = useState({
    codigoTendero: ""
  });

  let [list, setList] = useState(listProduct);
  
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


  const actualizarLista = ( accion, id ) => {
    if( accion === 'inc' ){
      let listT = list.map( dato => {
        if( dato.id === id ){
          return {
              id: dato.id,
              nombre: dato.nombre,
              fecha: dato.fecha,
              cantidad: dato.cantidad + 1,
              precio: dato.precio,
            } 
        }
        return dato
      } )

      setList(listT)
    }
    else if( accion === 'dec' ){
      let listT = list.map( dato => {
        if( dato.id === id ){
          return {
            id: dato.id,
            nombre: dato.nombre,
            fecha: dato.fecha,
            cantidad: dato.cantidad - 1,
            precio: dato.precio,
          } 
        }
        return dato
      } )

      setList(listT)
    }
    else if( accion === 'del' ){
      let listT = list.filter( dato => dato.id !== id )

      setList(listT)
    }

    console.log( 'Accion realizada' )
  }

  const obtenerTotal = () => {
    let totalDato = list.map( dato => {
      return dato.cantidad * dato.precio
    } )

    let total = 0

    for( let i = 0; i < totalDato.length; i++ ){
      total = totalDato[i]
    }

    return total

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
            <p className='totalPagarFact'> Total a Pagar:{obtenerTotal()}</p>
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
              {list.map( dato => {
                return <div className='trData' key={dato.id}>
                    <p className='idProducto'>{dato.id}</p>
                    <p className='nameProducto'>{dato.nombre}</p>
                    <p className='cantidadProducto'>{dato.cantidad}</p>
                    <p className='precioProducto'>{dato.precio}</p>
                    <p className='precioTotal'>{dato.cantidad*dato.precio}</p>
                    <div className='accionesProducto'>
                      <button className='incBtn' onClick={() => {
                        actualizarLista('inc', dato.id)
                      }}>
                        +
                      </button>
                      <button className='decBtn' onClick={() => {
                        actualizarLista('dec', dato.id)
                      }}>
                        -
                      </button>
                      <button className='delBtn' onClick={() => {
                        actualizarLista('del', dato.id)
                      }}>
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
