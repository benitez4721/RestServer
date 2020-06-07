
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
    urlDB = 'mongodb+srv://benitez4721:4721566@cluster0-b7fhw.mongodb.net/test'
}

process.env.URLDB = urlDB

