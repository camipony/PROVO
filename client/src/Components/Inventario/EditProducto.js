import React, { Fragment, useState } from "react";

const EditProducto = ({ producto }) => {
  const [nombre, setNombre] = useState(producto.nombre);

  //edit description function

  const updateNombre= async e => {
    e.preventDefault();
    try {
      const body = { nombre };
      const response = await fetch(
        `http://localhost:5000/todos/${producto.producto_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${producto.producto_id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${producto.producto_id}`}
        onClick={() => setNombre(producto.nombre)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Producto</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setNombre(producto.nombre)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateNombre(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setNombre(producto.nombre)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditProducto;