require('./config/config')

const express = require('express')
const app = express()
//mongoose
const mongoose = require('mongoose');
const path = require('path')

// habilitar la carpeta public
app.use( express.static(path.resolve( __dirname ,'../public')));

const bodyParser = require('body-parser')
// pase aplication/x-www-form
app.use(bodyParser.urlencoded({ extended: false }))


// parse application/jason
// app.use(bodyParser.json())

// rutas Globales

app.use( require('./routes/index'))

//conection
mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, res ) => {
    if (err) throw err;

    console.log('Base de datos online')
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto 300');
    
})