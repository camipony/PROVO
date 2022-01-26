import React, { Component } from "react";
import "../../Styles/inventario.css";
//import "../../Components/Inventario/funcion.js";
import casa from  '../../images/casa.png'; 
import provo2 from  '../../images/provo2.png'; 
// import { AiOutlineHome } from 'react-icons/ai';

export default class index extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <>
<div className="homeBase">
<button className="home" onClick={this.handleClick}>
        {/* {this.state.isToggleOn ? 'ON' : 'OFF'} */}
        {/* <div> <AiOutlineHome/> </div> */}
        <img src={casa} alt="Home Back" className="homeIcon" />
      </button>
</div>

        <h1 className="titulo1">Productos</h1>
        
        <div className="insertarD">
          {/* <input type="submit" value="INSERTAR" className="insert" /> */}
          <button  className="insert" onClick={this.handleClick}> 
          {this.state.isToggleOn ? 'ON' : 'OFF'}</button>
        </div>

        <section className="inventario">
          <div id="galeria"></div>
        </section>
        <div className="fin">
        <footer className="piePagina">Provo Todos los derechos reservados ©</footer>
        <img src={provo2} alt="Logo Provo" className="provo" />
        </div>
        

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="funcion.js"></script>
      </>
    );
  }
}
