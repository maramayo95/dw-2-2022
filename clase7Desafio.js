let carrito = [];

// function agregarProducto(){
//     const id = prompt("Ingrese un Id")
//     const marca = prompt("Ingrese una Marca")
//     const nombre = prompt("Ingrese un Nombre")
//     const precio = prompt("Ingrese un precio")

//     const nuevoProducto = {
//         id : id,
//         marca : marca,
//         nombre : nombre,
//         precio : precio
//     }

//     carrito.push(nuevoProducto)

// }


// agregarProducto()
// console.log(carrito)

function agregarProducto(producto){
    const nuevoProducto = {
        id: producto.id,
        marca: producto.marca,
        nombre: producto.nombre,
        precio: producto.precio
    }

    carrito.push(nuevoProducto)
}



agregarProducto({
        id: 1,
        marca: "Samsung",
        nombre: "Televisor Samsung",
        precio: 80000
})
agregarProducto({
        id: 2,
        marca: "LG",
        nombre: "Televisor LG",
        precio: 80000
})
agregarProducto({
        id: 3,
        marca: "Noblex",
        nombre: "Televisor Noblex",
        precio: 80000
})


// carrito.forEach(producto => console.log(producto))

// Metodo Find 
// const buscar = carrito.find(producto => producto.id == 1)
// console.log(buscar)

// Metodo Filter
// const eliminarProducto =  id => {
//     let filtrar = carrito.filter(producto => producto.id !== id )
//     carrito = filtrar
// }
// eliminarProducto(3)
// console.log(carrito);


