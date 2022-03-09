/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useContext } from 'react'
import Swal from 'sweetalert2';

//import '../../Styles/Facturacion/facturacionStyle.css'
import '../../Styles/Facturacion/Facturacion.css'
//import '../../Styles/Facturacion/mediaFacturacion.css'

import CrearFacturas from './CrearFacturas';
import VerFacturas from './VerFacturas';
import UserContext from '../../Context/User/UserContext';

export const Facturacion = () => {

    let [creadoFactura, setCreadoFactura] = useState(false);
    const userContext = useContext(UserContext);
    const {usuarioAutenticado} = userContext;

    if( usuarioAutenticado ){
        Swal.fire({
        icon: 'error',
        title: ' Debes iniciar secion ',
        showConfirmButton: false,
        timer: 3000,
        }).then(function() {
        window.location = "/login";
        });
        return <>
        </>
    }

    const activeGenereFactura = () => {
        setCreadoFactura(creadoFactura = !creadoFactura);
    }

    const verFacturaActiva = () => {
        if( creadoFactura ){
            return <CrearFacturas activeGenereFactura = {activeGenereFactura}/>
        }
        else{
            return <>
            </>
        }
    }

    return (
        <div className='bodyHomeFacturaa'>
            
            <div className='bodyHF'>
                <div className='headerHF'>
                    <div className='contButtonHead' >
                        <button onClick={ () => {
                            window.location = "/dashboard";
                        }}>
                            <ion-icon name="home-outline"></ion-icon>
                        </button> 
                    </div>
                    <div className='contTitle'>
                        <h1>FACTURACION</h1>
                    </div>
                    <div className='icon'>
                        <img src='https://www.latercera.com/resizer/EFm8se8COcJZjqcvfvUkJ2PuOOk=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/VAPOYBTRO5GF7G4XJ2NIMNC6KA.jpg' alt='.../' ></img>
                    </div>
                </div>
                <div className='cuerpoHF'>
                    <VerFacturas />
                    <div className='BtnFacturaActiva'>
                        <button onClick={activeGenereFactura}>
                            <ion-icon name="reader-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
            {verFacturaActiva()}
        </div>
    );

}
