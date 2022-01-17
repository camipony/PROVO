import React, { Component } from "react";
import "../../Styles/inventario.css";
import "../../Components/Inventario/script.js";

export default class index extends Component {
  render() {
    return (
      <>
        <h1 className="titulo1">inventario</h1>
        <nav className="directorio">
          <ul className="direcciones">
            <li className="l1">
              <a className="a1" href="#">
                Inicio
              </a>
            </li>
            <li className="l1">
              <a className="a1" href="#">
                Nuestro equipo
              </a>
            </li>
            <li className="l1">
              <a className="a1" href="#">
                Proyectos
              </a>
            </li>
            <li className="l1">
              <a className="a1" href="#">
                Contacto
              </a>
            </li>
          </ul>

          <form className="f1">
            <input
              type="search"
              name="q"
              placeholder="Buscar"
              className="inputSearch"
            />
            <input type="submit" value="Buscar" className="inputClick" />
          </form>
        </nav>
        <section className="inventario">
          <div id="galeria"></div>
        </section>
        <aside className="menu1">
          <ul className="lista2">
            <li className="l2">
              <input type="submit" value="Editar" className="editar" />
            </li>
            <li className="l2">
              <input type="submit" value="Marcar" className="marcar" />
            </li>
            <li className="l2">
              <input type="submit" value="Eliminar" className="eliminar" />
            </li>
          </ul>
        </aside>
        <footer className="piePagina">
          ©Todos los derechos reservados Provo (2021-2021)
        </footer>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="script.js"></script>
        <script src="funcion.js"></script>
      </>
    );
  }
}
