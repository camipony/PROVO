import React from 'react';

import { Link } from 'react-router-dom';

/* Styles */
import '../../Styles/toggle.css'

/* Components */

export default function Toggle(props) {

    return <div className={props.activar ? 'bodyToggle active':'bodyToggle'}>
        <div className='contToggleButton'>
            <button onClick={ () => props.ActivarToggle()}>
                <ion-icon name="menu-outline"></ion-icon>
            </button>
        </div>
        <ul>
            <li className={props.activar ? 'active' : ''}>
                <Link to="/facturacion" className='enlace'>
                    <div className='icon'>
                        <ion-icon name="home-outline"></ion-icon>
                    </div>
                    <span>Home</span> 
                </Link>
            </li>
            <li className={props.activar ? 'active' : ''}>
                <Link to="/facturacion" className='enlace'>
                    <div className='icon'>
                        <ion-icon name="storefront-outline"></ion-icon>
                    </div>
                    <span>Product</span>
                </Link>
                
            </li>
            <li className={props.activar ? 'active' : ''}>
                <Link to="/margenventas" className='enlace'>
                    <div className='icon'>
                        <ion-icon name="file-tray-full-outline"></ion-icon>
                    </div>
                    <span>Sales Margin</span>
                </Link>
                
            </li>
            <li className={props.activar ? 'active' : ''}>
                <Link to="/facturacion" className='enlace'>
                    <div className='icon'>
                        <ion-icon name="receipt-outline"></ion-icon>
                    </div>
                    <span>Billig</span>
                </Link>
                
            </li>
            <li className={props.activar ? 'active' : ''}>
                <Link to="/facturacion" className='enlace'>
                    <div className='icon'>
                        <ion-icon name="help-outline"></ion-icon>
                    </div>
                    <span>Help</span>
                </Link>
                
            </li>
            <li className={props.activar ? 'active' : ''}>
                <Link to="/facturacion" className='enlace'>
                    <div className='icon'>
                        <ion-icon name="exit-outline"></ion-icon>
                    </div>
                    <span>Sing Off</span>
                </Link>
                
            </li>
        </ul>
    </div>;
}
