/*import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

const express = require('express'); //modulo que utiliza el http, arranca express
const morgan = require('morgan'); //modulo que utiliza el http, arranca express
const app = express(); //servidor
const taskRoutes = require('./routes/task.routes')
app.use(morgan('dev'));
app.use(express.json())
app.use(taskRoutes);

app.listen(3000)
  console.log(`Server running on port 3000`);