/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import '../../Styles/facturacionStyle.css'
import '../../Styles/mediaFacturacion.css'

export default class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModal: false,
            modoModal: "",
            datos:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            nombreTienda: "",
            codigoTendero: "",
            telefonoTienda: "",
            fechaCompra: "",
            totalPagar: this.obtenerPago(),
            numberFactura: this.obtenerFecha()
        };
    }

    modal = (opcion) => {
        this.setState({
            isModal: !this.state.isModal,
            modoModal: opcion
        })
    }

    onChage = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    obtenerFecha = () => {
        var hoy =  new Date()
        var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear()
        var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
        return fecha +  " " + hora
    }

    obtenerPago = () => {
        return 5000
    }

    openModal = () => {
        if(this.state.isModal){
            if( this.state.modoModal === "compra" ){
                return <div className='modalContainer' onClick={this.modal}>
                    
                    <div className='modal'>
                        <h2>Detalles Factura</h2>
                        <div className='detallerFactura'>
                        
                        </div>
                        <div className='btnConfirmarFactura'>
                            <button> Confirmar </button>
                        </div>
                    </div>

                </div>
            }
            else{
                return <div className='modalContainer' onClick={this.modal}>

                </div>
            }
            
        }
        return <>
        </>
    }

    render() {
        return <div className="bodyFacturacion">

            {/*<div>
                <img src="https://cdn.discordapp.com/attachments/911076621333692456/913617361842602034/3.png" atl="../" ></img>
            </div>*/}

            <div className="conteTitleFactueacion">
                <button className='backToHome'>
                    <ion-icon name="home-outline"></ion-icon>
                </button>
                <h1  > Facturacion </h1>
            </div>

            <div className="contetFormFact" id='topFacturacion'>
                <div className='formDetallTienda detallFactTien'>
                    <h1>Detalles  Tienda</h1>
                    <div className='contInput extends'>
                        <input 
                            type="text" 
                            name="nombreTienda"
                            placeholder='Nombre Tienda'
                            onChange={this.onChage}
                            value={this.state.nombreTienda} />
                    </div>

                    <div className='contInput extends'>
                        <input 
                            type="text" 
                            name="nombreTienda"
                            placeholder='Codigo Tendero'
                            onChange={this.onChage}
                            value={this.state.nombreTienda} />
                    </div>
                    
                    
                    <div className='contInput'>
                        <label>Tel: </label>
                        <input 
                            type="text" 
                            name="nombreTienda"
                            onChange={this.onChage}
                            value={this.state.nombreTienda} />
                    </div>
                    
                </div>
                <div className='formDetallFactura detallFactTien'>
                    <h1>Detalles  Factura</h1>
                    <div className='contInput'>
                        <label># Factura</label>
                        <p>10254875621455</p>
                    </div>

                    <div className='contInput'>
                        <label>Fecha</label>
                        <p>{this.obtenerFecha()}</p>
                    </div>
                    
                    
                    <div className='contInput'>
                        <label>Total a Pagar: </label>
                        <p>{'$' + this.obtenerPago()}</p>
                    </div>
                </div>
            </div>

            <div className='btnFinalizarCompra'>
                <a href='#topFacturacion' className='backTop'>
                    <ion-icon name="caret-up-outline"></ion-icon>
                </a>
                <button className='btnFinCompra' onClick={this.modal.bind(this, "compra")}> FINALIZAR COMPRA </button>
            </div>

            <div className="contProductFact">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th className='itemProductFact'>Producto</th>
                            <th className='precioUni'>Precio U.</th>
                            <th className='cantidad'>Cantidad</th>
                            <th className='subTotal'>Subtotal</th>
                            <th className="itemAccionFact">Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.datos.map(dato => {
                            return <ItemListProduc dat={dato} modal={this.modal} key={dato} />
                        })}                        
                    </tbody>
                </table>
            </div>
            
            {this.openModal()}
                
        </div>
    }
}


class ItemListProduc extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isModal: false,
            modoModal: ""
        };
    }

    render(){
        return <tr key={this.props.dat}>
            <td>{this.props.dat}</td>
            <td className='itemProductFact'>Canela</td>
            <td className='precioUni'>$2000</td>
            <td className='cantidad'>2</td>
            <td className='subTotal'>$4000</td>
            <td className="itemAccionFact">
                <button className='btnAdd'>+</button>
                <button className='btnMin'>-</button>
                <button className='btnDel' onClick={this.props.modal}>D</button>                           
            </td>
        </tr>
    }
}