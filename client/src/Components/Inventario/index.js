import React, { Component } from "react";
import "../../Styles/inventario.css";
import "../../Styles/App.css";
//import "../../Components/Inventario/funcion.js";
import casa from "../../assets/casa.png";
import provo2 from "../../assets/provo2.png";
// import { AiOutlineHome } from 'react-icons/ai';
import "../../Styles/mediaProductos.css";

import InputProducto from "./Components/Inventario/InputProducto.js";
import ListProducto from "./Components/Inventario/ListProducto.js";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };

    this.state = { isToggleOn: true };

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
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

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="funcion.js"></script>
        <p className="App-intro">;{this.state.apiResponse}</p>
      </>
    );
  }
}
