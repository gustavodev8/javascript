               //01234567891011 //o indice sempre começa do zero, não EM 1
let umastring = "em uma lindo grande dia aconteceu"

    //concatenação
console.log (umastring + " um lindo grande dia")

    //encontrar onde começa o indice da palavra
console.log (umastring.indexOf('lindo'))

    //mudar o texto ou uma parte do texto
console.log (umastring.replace ('em', 'no'))

    //trocar uma letra no geral
console.log (umastring.replace (/e/g, '@'))

    //ver o tamanho de uma string
console.log (umastring.length)

    //ver um espaço especifico da string
console.log (umastring.slice(7, 12))

    //ver cada palavra em indices da frase
console.log(umastring.split(" "))

    //string toda em maiuscula
console.log (umastring.toUpperCase())

    //string toda em minuscula
console.log (umastring.toLowerCase())