import React, { Fragment, useState } from "react";

const EditProducto = (props) => {

  const [nombre, setNombre] = useState(props.todo ? props.todo.nombre : '' );

  //edit description function

  const updateNombre= async e => {
    e.preventDefault();
    try {
      const body = {
        nombre: nombre,
        precio: props.todoprecio, 
        descripcion: props.tododescripcion, 
        categoria: props.todo.categoria, 
        cantidad_exitente_producto: props.todo.cantidad
      };
      const response = await fetch(
        `https://provo-backend.herokuapp.com/productos/${props.todo.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/productos";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${props.todo.id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        className="modal"
        id={`id${props.todo.id}`}
        onClick={() => setNombre(props.todo.nombre)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Producto</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setNombre(props.todo.nombre)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateNombre(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setNombre(props.todo.nombre)}
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