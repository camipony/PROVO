import React, { Component } from "react";
import "../../Styles/Inventario/inventario.css";
import "../../Styles/Inventario/App.css";
//import "../../Components/Inventario/funcion.js";
import casa from "../../assets/casa.png";
import provo2 from "../../assets/provo2.png";
// import { AiOutlineHome } from 'react-icons/ai';
import "../../Styles/Inventario/mediaProductos.css";

import InputProducto from "./InputProducto.js";
import ListProducto from "./ListProducto.js";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };

    this.state = { 
      isToggleOn: true,
    };

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
    window.location = "/dashboard";
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
          {/* <button className="insert" onClick={this.handleClick}>
            {this.state.isToggleOn ? "INSERTAR" : "OFF"}
          </button> */}
        </div>

        <section className="inventario">
        <InputProducto />
        <ListProducto />
          {/* <div id="galeria"></div> */}
        </section>
        <div className="fin">
          <footer className="piePagina">
            Provo Todos los derechos reservados ©
          </footer>
          <img src={provo2} alt="Logo Provo" className="provo" />
        </div>

        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="funcion.js"></script> */}
      </>
    );
  }
}
