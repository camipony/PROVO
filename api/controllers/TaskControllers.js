const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("../db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a productos

app.post("/productoss", async (req, res) => {
  try {
    const { nombre } = req.body;
    const { cantidad } = req.body;
    const newProductos = await pool.query(
      "INSERT INTO productos (nombre) VALUES($1) RETURNING *",
      [description ]
    );

    res.json(newProductos.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos

app.get("/productoss", async (req, res) => {
  try {
    const allProducto = await pool.query("SELECT * FROM productos");
    res.json(allProducto.rows);
  } catch (err) {
    console.error(err.message);
  }
});




  const getUser = async (req, res,next) =>{

    try {
     
    const result = await pool.query("SELECT * FROM productos");
    res.json(result.rows)
     

    } catch (error) {

      next(error)
    }

   
}
  
  module.exports = {
    getUser
};

//get a todo

app.get("/productoss/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const productos = await pool.query("SELECT * FROM productos WHERE producto_id = $1", [
      id
    ]);

    res.json(productos.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo

app.put("/productoss/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    const updateProductos = await pool.query(
      "UPDATE productos SET nombre = $1 WHERE producto_id = $2",
      [nombre, id]
    );

    res.json("Producto was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo

app.delete("/productoss/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProducto = await pool.query("DELETE FROM productos WHERE producto_id = $1", [
      id
    ]);
    res.json("Producto was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log("server was started on port 5000");
});

