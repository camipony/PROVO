import React from "react";
import './Styles/App.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

/* Componentes */
import { MargenSales } from './Components/MargenSales';
import { Facturacion } from './Components/Facturacion';
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Register from './Components/Register/Register'
import Inventario from './Components/Inventario/index'

/* State - Context */
import FacturarionState from "./Context/Facturacion/FacturacionState";
import UserState from "./Context/User/UserState";

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
          </Routes>
        </Router>
      </UserState>        
    </FacturarionState>
      
    </div>
}

export default App;
