const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get('/detalle-producto', (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/detalle-producto.html"))
});
app.get('/carrito', (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/carrito.html"));
});


app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/login.html"));
});
app.use(express.static("public"));

app.listen(3030, console.log('Servidor corriendo en PUERTO 3030'));