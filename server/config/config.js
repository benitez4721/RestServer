
// ==========
// Puerto
// ==========

process.env.PORT = process.env.PORT || 3000;
// ==========
// Enterno
// ==========


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

