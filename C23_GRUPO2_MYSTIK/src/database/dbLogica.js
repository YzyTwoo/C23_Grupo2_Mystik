const path = require('path');
const fs = require('fs');

let leerArchivo = (fileName) => {
    let filePath = path.join(__dirname, '../database/', fileName + '.json');
    let fileJson = fs.readFileSync(filePath, 'utf-8');
    let products = JSON.parse(fileJson);
    return products
}

const getJson = (fileName) => {
    const file = fs.readFileSync(`${__dirname}/../database/${fileName}.json`,"utf-8");
    const json = JSON.parse(file);
    return json;
}

const guardarArchivo = (newArray, nameFile)=>{
    const pathFile = path.join(__dirname, '../database/', nameFile + '.json'); //es la ruta necesaria para ubicar el .JSON
    let datosjson = JSON.stringify(newArray); //transforma array de objetos a JSON
    fs.appendFileSync(pathFile, datosjson, 'utf-8'); //carga el nuevo objeto al JSON
}

const setJson= () => {
    const productsFilePath = path.join(__dirname, '../database/productos.json');
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    
	return products
}

const uploadUser = (array,fileName) => {
    const json = JSON.stringify(array);
    fs.writeFileSync(`${__dirname}/../database/${fileName}.json`,json,"utf-8")
}

let cargarArchivo = (newArray, fileName) => {
    const pathFile = path.join(__dirname, '../database/', fileName + '.json');
    const newJson = JSON.stringify(newArray);
    fs.writeFileSync(pathFile, newJson, 'utf-8')
    }

module.exports = {leerArchivo, getJson, uploadUser, setJson, guardarArchivo, cargarArchivo};
