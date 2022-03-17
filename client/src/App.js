import React from "react";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

/* Componentes */
import { MargenSales } from './Components/MargenSales/Margen';
import { Facturacion } from './Components/Facturacion/Facturacion';
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Register from './Components/Register/Register'
import Inventario from './Components/Inventario/Inventario'
import Soporte from './Components/Soporte/Soporte'
/* State - Context */
import FacturarionState from "./Context/Facturacion/FacturacionState";
import UserState from "./Context/User/UserState";

import './Styles/App.css';

/*  */

function App() {
  return <div className="App">
    <FacturarionState>
      <UserState>
        <Router>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/dashboard' element={<Home/>}/>
            <Route path='/productos' element={<Inventario/>}/>
            <Route path='/inventario' element={<Inventario/>}/>
            <Route path='/facturacion' element={<Facturacion/>}/>
            <Route path='/margenventas' element={<MargenSales/>}/>
            <Route path='/ayuda' element={<Soporte/>}/>
          </Routes>
        </Router>
      </UserState>        
    </FacturarionState>
      
    </div>
}

export default App;
