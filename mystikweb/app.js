const express = require('express');
const app = express();
const path = require('path')

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/index.html"))
});

app.get("/coleccion", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/coleccion.html"))
});

app.get("/tienda", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/tienda.html"))
});

app.get("/politicas-devolucion", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/politicas-devolucion.html"))
});

app.use(express.static("public"))

app.listen(3030, console.log("Servidor corriendo en puero 3030"));
