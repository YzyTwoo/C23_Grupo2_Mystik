const path = require('path');
const fs = require('fs');

let leerArchivo = (parametro) => {
    let filePath = path.join(__dirname, '../database/', parametro + '.json');
    let fileJson = fs.readFileSync(filePath, 'utf-8');
    let products = JSON.parse(fileJson);
    return products
}

const setJson= () => {
    const productsFilePath = path.join(__dirname, '../database/productosDetalle.json');
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	return products
}

module.exports = {leerArchivo, setJson};