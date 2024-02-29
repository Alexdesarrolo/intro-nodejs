const frutasArchivo = require('./frutas');

const cowsay = require('cowsay');
//destructuring
const {frutas, dinero} = require('./frutas');

console.log(frutasArchivo.frutas);
console.log(dinero )

console.log(cowsay.say({
    text : "Soy Alex",
    e : "oo",
    T : "u"
}));