import React, { Fragment, useState } from "react";

const EditProducto = ({ product }) => {
  const [nombre, setNombre] = useState(product.nombre);

  //edit description function

  const updateNombre= async e => {
    e.preventDefault();
    try {
      const body = { nombre };
      const response = await fetch(
        `http://localhost:9000/testAPI/${product.producto_id}`,
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
        data-target={`#id${product.producto_id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${product.producto_id}`}
        onClick={() => setNombre(product.nombre)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Producto</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setNombre(product.nombre)}
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
                onClick={() => setNombre(product.nombre)}
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