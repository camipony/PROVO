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
            return <ModalCard closeOrOpenModal = {closeOrOpenModal} />
        }
        else{
            return <></>
        }
    }

    return <div className='cardFactura'>
        <div className='headCard'>
            <h1>00000001</h1>
        </div>
        <div className='bodyCard'>
            <div>
                <p style={{fontWeight: '600'}}>fecha:</p>
                <p style={{fontWeight: '700'}}> 00/00/0000</p>
            </div>
        </div>
        <div className='footerCard'>
            <p>$230000</p>
            <button onClick={() => closeOrOpenModal()}>
                <ion-icon name="open-outline"></ion-icon>
            </button>
        </div>
        {activeModal()}
    </div>;
}

const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

function ModalCard(props){

    return <div className='ModalContainer'>
        <div className='modalVent'>
            <div className='contTop'>
                <h1>00000001</h1>
                <button onClick={props.closeOrOpenModal}>
                    <ion-icon name="close-outline"></ion-icon>
                </button>
            </div>
            <div className='contCenter'>
                <div className='contTopCenter'>
                    <h3>Fecha: 00/00/0000</h3>
                    <h3>Total Productos: 100</h3>
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
                        {list.map(() => {
                            return <div className='trData' key={list}>
                                <p className='idProducto'>ID</p>
                                <p className='nameProducto'>Producto</p>
                                <p className='cantidadProducto'>Cantidad</p>
                                <p className='precioProducto'>Precio</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <div className='contBottom'>
                <h1>$233486</h1>
            </div>
        </div>
    </div>
}
