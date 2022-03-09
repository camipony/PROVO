import React, { Fragment, useState } from "react";

const InputProducto = () => {
  const [nombre, setNombre] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { nombre };
      const response = await fetch("http://localhost:9000/productos", {
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
      <h1 className="text-center mt-5">CRUD Provo</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputProducto;