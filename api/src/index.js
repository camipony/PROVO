const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const regisRoutes = require('./routes/regis.routes');


const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(regisRoutes);
app.use((err, req, res, next) => {
        return res.json({message: err.message})
})

app.listen(5000)
console.log('Server on port 5000')