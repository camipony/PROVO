import React, { useState } from 'react';

/* Import Styles */
import '../../Styles/Facturacion/CardFactura.css'
/* Import Componets */

export default function CardFactura(props) {

    let [isOpenModal, setIsOpenModal] = useState(false);

    const closeOrOpenModal = () => {
        setIsOpenModal(isOpenModal = !isOpenModal);
    }

    const activeModal = () => {
        if( isOpenModal ){
            return <ModalCard closeOrOpenModal = {closeOrOpenModal} dato = {props.dato} />
        }
        else{
            return <></>
        }
    }

    return <div className='cardFactura'>
        <div className='headCard'>
            <h1>{props.dato.id}</h1>
        </div>
        <div className='bodyCard'>
            <div>
                <p style={{fontWeight: '500', fontSize: '13px'}}>fecha:</p>
                <p style={{fontWeight: '600', fontSize: '15px'}}>{props.dato.fecha_creacion}</p>
            </div>
        </div>
        <div className='footerCard'>
            <p>{props.dato.total_a_pagar}</p>
            <button onClick={() => closeOrOpenModal()}>
                <ion-icon name="open-outline"></ion-icon>
            </button>
        </div>
        {activeModal()}
    </div>;
}

function ModalCard(props){

    return <div className='ModalContainer'>
        <div className='modalVent'>
            <div className='contTop'>
                <h1>{props.dato.id}</h1>
                <button onClick={props.closeOrOpenModal}>
                    <ion-icon name="close-outline"></ion-icon>
                </button>
            </div>
            <div className='contCenter'>
                <div className='contTopCenter'>
                    <p>{'Fecha: ' + props.dato.fecha_creacion}</p>
                    <p>{'Total Productos: ' + props.dato.total_productos}</p>
                </div>
                <div className='contListDatos'>
                    <div className='headList'>
                        <div className='trData'>
                            <p className='idProducto'>ID</p>
                            <p className='nameProducto'>Producto</p>
                            <p className='cantidadProducto'>Cantidad</p>
                            <p className='precioProducto'>Precio</p>
                        </div>
                        
                    </div>
                    <div className='bodyList'>
                        {props.dato.item.map( item => {
                            return <div className='trData' key={item.id}>
                                <p className='idProducto'>{item.id}</p>
                                <p className='nameProducto'>{item.nombre}</p>
                                <p className='cantidadProducto'>{item.cantidad_producto}</p>
                                <p className='precioProducto'>{item.precio}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <div className='contBottom'>
                <h1>{props.dato.total_a_pagar}</h1>
            </div>
        </div>
    </div>
}
