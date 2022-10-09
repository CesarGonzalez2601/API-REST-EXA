const express = require('express');
const app = express();
const morgan = require('morgan');

//configuraciones
app.set('json spaces', 2);
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Utilizar rutas
app.use(require('./routes/index.js'));
app.use('/api/Departamentos',require('./routes/Departamentos.js'));

//Iniciando el servidor

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`); 
});
