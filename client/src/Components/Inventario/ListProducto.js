import React, { Fragment, useEffect, useState } from "react";

import EditProducto from "./EditProducto";

const ListProducto= () => {
  const [producto, setProducto] = useState([]);

  //delete todo function

  const deleteProducto = async id => {
    try {
      const deleteProduct = await fetch(`http://localhost:9000/productos/${id}`, {
        method: "DELETE"
      });

      setProducto(producto.filter(producto => producto.producto_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getProducto = async () => {
    try {
      const response = await fetch("http://localhost:9000");
      const jsonData = await response.json();

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
      <table class="table mt-5 text-center">
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
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditProducto todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteProducto(todo.todo_id)}
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