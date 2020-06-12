
// ==========
// Puerto
// ==========

process.env.PORT = process.env.PORT || 3000;
// ==========
// Enterno
// ==========

// ==========
// Vencimiento del token
// ==========
process.env.CADUCIDAD_TOKEN = '1hr'

// ==========
// SEED de autenticacion
// ==========
process.env.SEED = process.env.SEED || 'secret'

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'
// ==========
// Base de datoss
// ==========
let urlDB

if ( process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.urlProd
}

process.env.URLDB = urlDB


// ==========
// Base de datoss
// ==========

process.env.CLIENT_ID = process.env.CLIENT_ID || '216523561300-jvolu48eukrete02rj65e8e89018q906.apps.googleusercontent.com'
