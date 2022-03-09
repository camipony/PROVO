import React from 'react';

/* Import Styles */
import '../../Styles/Facturacion/VerFacturas.css'
import CardFactura from './CardFactura';

/* Import Components */

const list = [1,5,2,6,3,4,5,2,6,7,8,8,9]

export default function VerFacturas(props) {

    return <div className='bodyVerFacturas'>
        {list.map(dato => {
            return <CardFactura keys={dato} />
        })}
    </div>;
}
