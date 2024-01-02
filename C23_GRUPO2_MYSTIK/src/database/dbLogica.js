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
let cargarArchivo = (newArray, fileName) => {
    const pathFile = path.join(__dirname, '../database/', fileName + '.json');
    const newJson = JSON.stringify(newArray);
    fs.writeFileSync(pathFile, newJson, 'utf-8')
    }

module.exports = {leerArchivo, setJson,cargarArchivo};