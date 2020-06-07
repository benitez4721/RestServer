require('./config/config')

const express = require('express')
const app = express()
//mongoose
const mongoose = require('mongoose');


const bodyParser = require('body-parser')
// pase aplication/x-www-form
app.use(bodyParser.urlencoded({ extended: false }))
 
// rutas
app.use( require('./routes/usuario'))

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