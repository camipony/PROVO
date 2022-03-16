import React from 'react';

/* Import Styles */
import '../../Styles/Facturacion/VerFacturas.css'
import CardFactura from './CardFactura';

export default function VerFacturas(props) {

    return <div className='bodyVerFacturas'>
        {props.facturas.map(dato => {
            return <CardFactura key={dato.id} dato = {dato} />
        })}
    </div>;
}
