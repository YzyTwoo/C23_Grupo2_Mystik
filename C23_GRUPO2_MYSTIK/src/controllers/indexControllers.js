const productos = [
    {
        id: 1,
        image: 'chaoooos.jpg',
        name: "BUZO NEGRO - CHAOS CITY",
        price: 42.999,
        description: '3 Cuotas sin interés de $14.333',
        talle: 'M',
    },
    {
        id: 2,
        image: 'UrbanCity.jpg',
        name: "BUZO NEGRO - URBAN CITY",
        price: 44.999,
        description: '3 Cuotas sin interés de $14.999',
        talle: 'M', 
    },
    {
        id: 3,
        image: 'ReligionSucks.jpg',
        name: "BUZO NEGRO - RELIGION SUCKS",
        price: 44.999,
        description: '3 Cuotas sin interés de $14.333',
        talle: 'M',
    },
    {
        id: 4,
        image: 'dibujitop.jpg',
        name: "BUZO NEGRO - CHAOS CITY",
        price: 42.999,
        description: '3 Cuotas sin interés de $14.333',
        talle: 'M',
    },
    {
        id: 5,
        image: 'dibujito2.jpg',
        name: "BUZO NEGRO - URBAN CITY",
        price: 44.999,
        description: '3 Cuotas sin interés de $14.999',
        talle: 'M',
    },
    {
        id: 6,
        image: 'dddibujito3.jpg',
        name: "BUZO NEGRO - RELIGION  SUCKS",
        price: 44.999,
        description: '3 Cuotas sin interés de $14.999',
        talle: 'M',
    },
]

const indexControllers = {
    index: (req, res) => {
        res.render('index', {title: "Mystik", productos})
    },
}

module.exports = indexControllers;