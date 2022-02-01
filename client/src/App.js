import './Styles/App.css'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import React from "react";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

function App() {
  return <div className="App">
     <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
}

export default App;
