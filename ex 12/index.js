let num1 = 10.25
let num2 = 2.5

console.log (num1.toString() + num2) // mostrar o valor de soma 
console.log (typeof num1) // mostrar se o valor é numbern undefined ou string
console.log (num1.toString(2)) //mostar o numero em forma de binarios
console.log (num1.toFixed(1)) // aproximar numeros
console.log(Number.isInteger(num1)) //declara verdadeiro ou falso se o valor é inteiro 

let tentativa = (num1 * "ola")
console.log (Number.isNaN(tentativa)) //declara se a conta é invalida

let numeru1 = 0.7
let numeru2 = 0.1

numeru1 += numeru2
numeru1 += numeru2
numeru1 += numeru2
numeru1 += numeru2
numeru1 += numeru2
numeru1 += numeru2
numeru1 += numeru2
numeru1 += numeru2
numeru1 += numeru2
numeru1 += numeru2
numeru1 += numeru2
numeru1 += numeru2
numeru1 += numeru2

numeru1 = parseFloat(numeru1.toFixed(2))  //numero flutuante, depois aproxima duas casas 
console.log (numeru1) //escreva o numero 1
console.log (Number.isInteger(numeru1)) //verifique se o valor é inteiro

