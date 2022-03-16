import React, { Fragment, useState } from "react";

const InputProducto = () => {
  const [nombre, setNombre] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();

    const elem = window.localStorage.getItem('usuario')
    const dato = elem ? JSON.parse(elem) : null

    try {
      const body = {
        id_usuario: dato.id,
        nombre: nombre,
        precio: 1000, 
        descripcion: '', 
        categoria: '', 
        cantidad: 1
      };
      console.log(body)
      const response = await fetch("https://provo-backend.herokuapp.com/productos/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      console.log(response)

      window.location = "/productos";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>


<form className="d-flex mt-5" onSubmit={onSubmitForm}>  
<div className="form-control">
    <label htmlFor="inputProduct" className="visually-hidden">Product</label>
    <input type="text" className="form-control"
    value={nombre}
    onChange={e => setNombre(e.target.value)}
    id="inputProduct" placeholder="Product"/>
  </div>
    <button className="btn btn-success ">Add</button>
  
      </form>
  


    </Fragment>
  );
};

export default InputProducto;

/* 
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>  
      </form>
      <input
          type="text"
          className="form-group "
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
       <small id="emailHelp" class="form-text text-muted">Insert the product in your inventary.</small> */