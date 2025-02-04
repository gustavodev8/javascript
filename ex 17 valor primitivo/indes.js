
/*
Primitivos (imutaveis) - Strings, Number, Undefield, Nan, Boolean, Null (bigint, symbol)
*/

let dobra = 9
let dobra1 = dobra
console.log (dobra1, dobra)

dobra = 8
console.log (dobra1, dobra)



/*
Referencia (mutavel) - Srrays, Object, function
*/



let a = [1,2,3]
let b = a
console.log (a,b) //aqui o valor de b permaneceu igual 

a.push(4)
console.log (a,b) //aqui o valor de b ja mudou pq o valor de A mudou!

a.pop() 
console.log (a,b)
