const fs = require('fs');

const bicicletasJSON = fs.readFileSync('./bicicletas.json', 'utf-8');

const bicicletas = JSON.parse(bicicletasJSON);

module.exports = bicicletas;