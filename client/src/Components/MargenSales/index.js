import React, { useContext  } from 'react';
import Swal from 'sweetalert2';

/* Styles */
import '../../Styles/MargeSales/margeSales.css'
import '../../Styles/MargeSales/mediaMargeSales.css'

/* Context */
import UserContext from '../../Context/User/UserContext';


export const MargenSales = () => {

  const userContext = useContext(UserContext);
  const {usuarioAutenticado} = userContext;

  if( !usuarioAutenticado ){
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

  return <div className='bodyMargeSales'>

    <div className='BodyMS'>
      <div className='headerMS'>
        <div className='contButtonHead' >
          <button onClick={ () => {
            window.location = "/dashboard";
          }}>
            <ion-icon name="home-outline"></ion-icon>
          </button> 
        </div>
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
        <div className='TotalVentas'>
        </div>
        <div className='infoInventario'></div>
        <div className='Contfacturas'></div>
        <div className='infoStore'></div>
      </div>
    </div>
  </div>;

};
