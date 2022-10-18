// const nombre = "Matias"

// const pelota = {

// }

// const verdadero = true

//     // Declaración de array vacío
//     const arrayVacio = [];
//     // Declaración de array con números
//     const deUnaCifra = [1,2,3,4,5,6,7,8,9,0];
//     // Declaración de array con strings
//     const listaDeCompras = ['jabón','detergente','suavizante','escoba','trapo de piso'];
//     // Declaración de array con booleanos
//     const booleanos = [true,false,true,false];
//     // Declaración de array mixto
//     const datosVariados = [1,false,"C4",3.14];

// const productos = [];

// const producto = {}; 

// const productos = [{
//     id: 1,
//     marca: 'Samsung',
//     nombre: 'TV Smart Glorious 43',
//     precio: 85000
// }, {
//     id: 2,
//     marca: 'Phillips',
//     nombre: 'TV Smart Insane 50',
//     precio: 92000
// }, {
//     id: 3,
//     marca: 'Whirlpool',
//     nombre: 'Heladera WP320B',
//     precio: 157000
// }, {
//     id: 4,
//     marca: 'Patrick',
//     nombre: 'Heladera PTK278SLB',
//     precio: 77000
// },
// {
//     id: 5,
//     marca: 'Patrick',
//     nombre: 'Heladera PTK278SLW',
//     precio: 71000
// }
// ]


// console.table(productos)


const palabras = ['Hola', 'soy', 'un', 'array']; 

// for (let index = 0; index < palabras.length; index++) {
//     console.log(palabras[index]);
// }

//console.log(palabras.length)
// Método para agregar elementos a un Array 
// palabras.push("de")
// palabras.push("javascript")

// console.log(palabras)

// palabras.unshift("Buen Día! ")
// palabras.shift()
// palabras.pop()

// console.log(palabras)


// const productos = ['tablet', 'netbook', 'smart tv', 'smartphone', 'notebook', 'heladera', 'lavarropas', 'freezer', 'sillón', 'silla', 'mesa'];

//         const agregar = (producto) => {
//             let indiceProducto = productos.indexOf(producto)
//             if (indiceProducto == -1) {
//                 productos.push(producto);
//                 console.log('Se agregó el producto al final del array');
//             } else {
//                 console.log('El producto ya existe. Se encuentra en la posición '+indiceProducto+' del array');
//             }
//         }
        
        // agregar('tablet');
        //Salida por consola --> El producto ya existe. Se encuentra en la posición 1 del array
        
        // agregar('extractor'); 
        //Salida por consola --> Se agregó el producto al final del array


    //    console.log(productos.indexOf('Celular'))


const productos = [{
    id: 1,
    marca: 'Samsung',
    nombre: 'TV Smart Glorious 43',
    precio: 85000
}, {
    id: 2,
    marca: 'Phillips',
    nombre: 'TV Smart Insane 50',
    precio: 92000
}, {
    id: 3,
    marca: 'Whirlpool',
    nombre: 'Heladera WP320B',
    precio: 157000
}, {
    id: 4,
    marca: 'Patrick',
    nombre: 'Heladera PTK278SLB',
    precio: 77000
},
{
    id: 5,
    marca: 'Patrick',
    nombre: 'Heladera PTK278SLW',
    precio: 71000
}
]

productos.forEach(producto => console.table(producto))
