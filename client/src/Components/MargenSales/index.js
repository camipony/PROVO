import React, { useState } from 'react';

/* Styles */
import '../../Styles/MargeSales/margeSales.css'
import '../../Styles/MargeSales/mediaMargeSales.css'

/* Components */
import Toggle from './Toggle';

export const MargenSales = () => {
  let [activar, setActivar] = useState(false);

  const ActivarToggle = () => {
    setActivar( activar = !activar );
  }

  return <div className='bodyMargeSales'>

    <Toggle 
      activar = {activar} 
      ActivarToggle = {ActivarToggle}
    />

    <div className={activar ? 'BodyMS active':'BodyMS'}>
      <div className='headerMS'>
        <div className='contTitle'>
          <h1>SALES MARGIN</h1>
        </div>
        <div className='icon'>
          <img src='https://www.latercera.com/resizer/EFm8se8COcJZjqcvfvUkJ2PuOOk=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/VAPOYBTRO5GF7G4XJ2NIMNC6KA.jpg' alt='.../' ></img>
        </div>
      </div>
      <div className='cuerpoMS' >
        <div className='GraficasSales'>
          <div className='ventasProduct'>
            <canvas id="salesProduct" width="400" height="400"></canvas>
          </div>
          <div className='ventasDias'>
            <canvas id="daySales" width="400" height="400"></canvas>
          </div>
        </div>
        <div className='TotalVentas'></div>
        <div className='infoInventario'></div>
        <div className='Contfacturas'></div>
        <div className='infoStore'></div>
      </div>
    </div>
  </div>;

};
