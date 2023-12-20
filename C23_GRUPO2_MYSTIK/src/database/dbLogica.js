const path = require('path');
const fs = require('fs');

let leerArchivo = (parametro) => {
    let filePath = path.join(__dirname, '../database/', parametro + '.json');
    let fileJson = fs.readFileSync(filePath, 'utf-8');
    let products = JSON.parse(fileJson);
    return products
}

module.exports = leerArchivo