import React, { Component } from "react";
import "../../Styles/inventario.css";
import "../../Components/Inventario/script.js";
import $ from "jquery";

const imagenes = [
  {
    src: "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5937e90a5bafe882f5bc09e6/gatitos-cesta_0.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 1",
    precio: 52,
  },
  {
    src: "https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 2",
    precio: 82,
  },
  {
    src: "https://www.zooplus.es/magazine/wp-content/uploads/2018/04/fotolia_169457098.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 3",
    precio: 99,
  },
  {
    src: "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_960/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=-tX3EMqT",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 4",
    precio: 7,
  },
  {
    src: "https://www.hogarmania.com/archivos/201204/estrenimiento-gato-bebe2-xl-668x400x80xX.jpg",
    alt: "Gatitos, no se puede decir más",
    nombre: "Artículo 5",
    precio: 100,
  },
  {
    src: "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_960/public/download-21.png?itok=xwvQwAhn",
    alt: "perritos, no se puede decir más",
    nombre: "Artículo 6",
    precio: 52,
  },
];

function renderizarGaleria(imagenes) {
  let html = "";

  imagenes.forEach(function (imagen) {
    html += `
        <div className="galeria-item">
          <img src="${imagen.src}" alt="${imagen.alt}"  width="200px" height="120px" style="border: solid 4px black;" />
          <h3 className = "galeria-h3">${imagen.nombre}</h3>
          <p className = "galeria-p">${imagen.precio}€</p>
        </div>
 
      `;
  });

  $("#galeria").html(html);
}

$(function () {
  renderizarGaleria(imagenes);
});

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
          ©Todos los derechos reservados Provos (2021-2021)
        </footer>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="funcion.js"></script>
      </>
    );
  }
}
