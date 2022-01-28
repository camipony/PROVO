const express = require('express');
const cors = require('cors');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// cors
app.use(cors());

// Router
app.use(require('./routers/index'));

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
    console.log('Servidor en puerto ' + app.get('port'));
});