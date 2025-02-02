let desafio = prompt('fale algum numero')
desafio = parseFloat(desafio)
document.body.innerHTML += '<h1> seu numero é ' + desafio + '</h1>'

let resultado = (Number.isInteger(desafio))
document.body.innerHTML += 'o seu numero é <strong>inteiro</strong>?  ' + resultado + '<br>'
let raiz = (Math.sqrt(desafio))
document.body.innerHTML += 'a raiz quadrada de seu numero é: ' + raiz + '<br>'
let arredondado = Math.ceil(desafio)
document.body.innerHTML += 'numero arredondado para cima: ' + arredondado + ' <br>'
let parabaixo = Math.floor(desafio)
document.body.innerHTML += 'seu numero arredondado para baixo: ' + parabaixo + '<br>'
let metade = (desafio / 2)
document.body.innerHTML += desafio + ' divido pela metade é ' + metade