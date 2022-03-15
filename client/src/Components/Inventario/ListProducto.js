import React, { Fragment, useEffect, useState } from "react";

import EditProducto from "./EditProducto";

const ListProducto= () => {
  const [producto, setProducto] = useState([]);

  //delete todo function

  const deleteProducto = async id => {
    try {
      const deleteProducto = await fetch(`https://provo-backend.herokuapp.com/productos/${id}`, {
        method: "DELETE"
      });

      setProducto(producto.filter(producto => producto.id !== id));
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

  useEffect(() => {
    getProducto();
  }, []);

  console.log(producto);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edit</th>
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