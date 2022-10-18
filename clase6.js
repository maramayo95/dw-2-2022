// Ejercicio con distintos tipos de console
// console.log("Hola")
// console.warn("Advertencia")
// console.error("Error")

// PROGRAMA EDAD -------------------------------------------------------
// const edad = prompt("Ingrese una edad")

// if(edad >= 18){
//     console.log("Podes pasar al boliche")
// } else {
//     console.error("No tenes la edad suficiente para pasar")
// }
// -------------------------------------------------------


// CONSOLE.TABLE() ----------------------------------------
// const televisor = {
//     marca : "Samsung",
//     tamanio: "50 pulgadas",
//     modelo : "2020",
//     precio : 50000
// }

// console.log(televisor)
// console.table(televisor)

// -------------------------------------------------------
    // Objeto windows 
    // window.open("http://www.youtube.com")

    // window.close()


// Ejercicio isNaN ----------------------------------------------------
// const suma = 5 * "qsdasdasdasdsa"

// const sumar = () => {
//     const a = prompt("Ingresa un numero")
//     const b = prompt("Ingresa otro número")

//     const resultado = parseInt(a) + parseInt(b)
    
//     if(isNaN(resultado)){
//         alert("Debes ingresar números y no letras")
//     }  else {
//         alert(resultado)
//     }

// }

// sumar()

// ----------------------------------------------------
// 
// to fixed() ----------------------------------------------------

// let numero = 3.14167;
// let numeroRedondeado = numero.toFixed(3);

// console.log(typeof numeroRedondeado, numeroRedondeado);

//Salida por consola --> string 3.142

// ----------------------------------------------------
// Parse float ---------------------------------------
// let numeroParseado = parseFloat(numeroRedondeado);
// console.log(typeof numeroParseado, numeroParseado);

//Salida por consola --> number 3.142

// ---------------------------------------

// Objeto Math  
// Math.PI
// const PI = 3.14;

// function calcularPerimetro(diametro){
//         let resultado = PI * diametro;
//         console.log(resultado)
// }

// calcularPerimetro(90);

// console.log(Math.PI)

// function calcularPerimetro(diametro){
//     let resultado = Math.PI * diametro;
//     console.log(resultado)
// }

// calcularPerimetro(90);

// ---------------------------------------

// Raiz Cuadrada Math.sqrt()

// let numero = parseFloat(prompt("Ingresa un número"));
// let raizCuadrada = Math.sqrt(numero);
// console.log(raizCuadrada);  

// ---------------------------------------
// Funcion exponencial - Math.pow() 
// let base = parseFloat(prompt("Ingresa la base"));
// let exponente = parseFloat(prompt("Ingresa el exponente"));
// let potencia = Math.pow(base,exponente);
// console.log(potencia);

// ---------------------------------------

// Math.random()--------- Generador de Contraseñas
// function generarContrasenia(){
//     const a = Math.random().toString(36).toUpperCase().slice(2)
//     const b = Math.random().toString(36).toUpperCase().slice(2)
//     const password = a + b
//     console.log(password)
// }

// generarContrasenia()
// for (let index = 0; index < 10; index++) {
//      generarContrasenia()    
// }


// DESAFIO ENTREGABLE 6

// const producto1 = {
//     id : 1,
//     nombre : "Samsung galaxy 1",
//     descripcion : "lorem ipsum",
//     precio : 5000
// }


// const producto2 = {
//     id : 2,
//     nombre : "Samsung galaxy 2",
//     descripcion : "lorem ipsum",
//     precio : 6000
// }

// console.log(producto1, producto2)
// console.table(producto1, producto2)







