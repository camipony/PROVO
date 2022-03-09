const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

// cors
app.use(cors());

app.use((err, req, res, next) => {
    return res.json({message: err.message})
})

// Router
app.use(require('./routers/index'));

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
    console.log('Servidor en puerto ' + app.get('port'));
});