const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const taskRoutes = require('./routes/task.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(taskRoutes);
app.use((err, req, res, next) => {
        return res.json({message: err.message})
})

app.listen(2000)
console.log('Server on port 2000')