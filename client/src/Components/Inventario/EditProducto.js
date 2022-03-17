import React, { Fragment, useState } from "react";

import '../../Styles/Inventario/ModalProductos.css';

const EditProducto = (props) => {

  const [nombre, setNombre] = useState(props.todo.nombre ? props.todo.nombre : 'Juan');

  let [actiModal, setActiveModal] = useState(false);

  //edit description function

  const onOffModal = () => {
    setActiveModal(!actiModal)
  }

  const updateNombre= async e => {
    e.preventDefault();
    try {
      const body = {
        nombre: nombre,
        precio: props.todo.precio, 
        descripcion: props.todo.descripcion, 
        categoria: props.todo.categoria, 
        cantidad: props.todo.cantidad_exitente_producto
      };
      console.log(body)
      await fetch(
        `https://provo-backend.herokuapp.com/productos/${props.todo.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      ).then(() => {
        window.location = "/productos";
      });

      //
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
        onClick={onOffModal}
      >
        Edit
      </button>

      <div
        className={actiModal ? 'modalContainerProduct' : "modalOff"}
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
                onClick={() => onOffModal()}
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
                onClick={e => {
                    updateNombre(e)
                    onOffModal()
                  }
                }
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={onOffModal}
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