const pessoal = {
    nome: 'gustavo' ,
    sobrenome: 'santana' ,
    idade: '18'
}

console.log (pessoal.nome, pessoal.sobrenome, pessoal.idade)

function teste (nome, sobrenome, idade) {
    return {
        nome ,
        sobrenome ,
        idade
    }
}

const resultado = (teste('gustavo', 'apolo', 35))
const resultado2 = (teste('pedro', 'jose', 35))
const resultado3 = (teste('pedrin', 'apolo', 35))
const resultado4 = (teste('gustavo', 'apolo', 35))
const resultado5 = (teste('aragao', 'artur', 35))
const resultado6 = (teste('sergio', 'apolo', 22))

console.log (resultado6, resultado2)