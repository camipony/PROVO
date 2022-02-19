import React, { Fragment, useState } from "react";

const InputProducto = () => {
  const [nombre, setNombre] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { nombre };
      const response = await fetch("http://localhost:9000/testAPI", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
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