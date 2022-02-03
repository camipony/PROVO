import React from "react";
import './Styles/App.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

/* Componentes */
import { MargenSales } from './Components/MargenSales';
import { Facturacion } from './Components/Facturacion';

/* State - Context */
import ToggleState from './Context/Toggle/ToggleState'
import FacturarionState from "./Context/Facturacion/FacturacionState";

/*  */

function App() {
  return <div className="App">
    
    <ToggleState>
      <FacturarionState>
        <Router>
          <Routes>
            <Route path='/facturacion' element={<Facturacion/>}/>
            <Route path='/margenventas' element={<MargenSales/>}/>
          </Routes>
        </Router>
      </FacturarionState>
    </ToggleState>
      
    </div>
}

export default App;
