const productos = [
    {
        id: 1,
        image: 'chaoooos.jpg',
        name: "BUZO NEGRO - CHAOS CITY",
        price: 42.999,
        description: '3 Cuotas sin interés de $14.333',
    },
    {
        id: 2,
        image: 'UrbanCity.jpg',
        name: "BUZO NEGRO - URBAN CITY",
        price: 44.999,
        description: '3 Cuotas sin interés de $14.999',
    },
    {
        id: 3,
        image: 'ReligionSucks.jpg',
        name: "BUZO NEGRO - RELIGION SUCKS",
        price: 44.999,
        description: '3 Cuotas sin interés de $14.333',
    },
    {
        id: 4,
        image: 'dibujitop.jpg',
        name: "BUZO NEGRO - CHAOS CITY",
        price: 42.999,
        description: '3 Cuotas sin interés de $14.333',
    },
    {
        id: 5,
        image: 'dibujitop2.jpg',
        name: "BUZO NEGRO - URBAN CITY",
        price: 44.999,
        description: '3 Cuotas sin interés de $14.999',
    },
    {
        id: 6,
        image: 'dddibujito3.jpg',
        name: "BUZO NEGRO - RELIGION  SUCKS",
        price: 44.999,
        description: '3 Cuotas sin interés de $14.999',
    },
];


const productosControllers = {
    detalleProducts: (req, res) => {
        res.render('products/detalleProducts', { title:'Detalles', productos });
    },
    carritoProducts: (req, res) => {
        res.render('products/carritoProducts', {title:'Carrito', productos });
    },
    editProduct: (req, res) => {
        res.render('products/editProduct', {title:'Edición', productos })
    }
}

module.exports = productosControllers;