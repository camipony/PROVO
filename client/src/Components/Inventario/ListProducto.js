import React, { Fragment, useEffect, useState, useContext } from "react";
import axios from 'axios'
import Swal from 'sweetalert2';

import EditProducto from "./EditProducto";
import FacturacionContext from '../../Context/Facturacion/FacturacionContext';

const ListProducto= () => {

  const facturacionContext = useContext(FacturacionContext);
  const {
    dtfacturaActiva, 
    obtenerFacturaActiva
  } = facturacionContext

  const elem = window.localStorage.getItem('usuario')
  let usuario = elem ? JSON.parse(elem) : null

  useEffect(() => {
    obtenerFacturaActiva(usuario.id)
  }, [])

  const [producto, setProducto] = useState([]);

  //delete todo function

  const deleteProducto = async id => {
    try {
      await fetch(`https://provo-backend.herokuapp.com/productos/${id}`, {
        method: "DELETE"
      }).then(() => {
        setProducto(producto.filter(producto => producto.id !== id));
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  const getProducto = async () => {
    try {

      const elem = window.localStorage.getItem('usuario')
      const dato = elem ? JSON.parse(elem) : null

      const response = await fetch(`https://provo-backend.herokuapp.com/productos/${dato.id}`);
      const jsonData = await response.json();
      console.log(
        jsonData
      )

      setProducto(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const addCarrito = async ( todo ) => {
    console.log(dtfacturaActiva)
    try{

      if( dtfacturaActiva ){
        const item = {
          id_factura: dtfacturaActiva[0].id, 
          id_producto: todo.id, 
          cantidad_producto: 1
        }

        console.log(item)

        await axios.post('https://provo-backend.herokuapp.com/item-factura/', item)
        Swal.fire({
          icon: 'success',
          title: 'Producto agregado con exito',
          showConfirmButton: false,
          timer: 3000,
        })
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Error al agregar producto',
          showConfirmButton: false,
          timer: 3000,
        })
      }
      
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    getProducto();
  });

  console.log(producto);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edit</th>
            <th>Carrito</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {producto.map(todo => (
            <tr key={todo.id}>
              <td>{todo.nombre}</td>
              <td>
                <EditProducto todo={todo} />
              </td>
              <td>
                <button className="btn btn-warning"
                  onClick={() => {
                    addCarrito(todo)
                  }}
                >
                  <ion-icon name="bag-add-outline"></ion-icon>
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteProducto(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListProducto;