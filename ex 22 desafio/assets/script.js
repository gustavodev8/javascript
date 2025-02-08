const form = document.querySelector('.form')






form.addEventListener('submit', function (e) { // assistir evento
    e.preventDefault() // previnir evento

    const inputPESO = e.target.querySelector('.peso')
    const inputALT = e.target.querySelector('.altura')

    const peso = Number(inputPESO.value)
    const altura = Number(inputALT.value)

    if (!peso) { // se o peso for valido isso n executa por causa do !
        resultado('peso invalido', false)
        return;
    }
    if (!altura) { //se o altura for valido isso n executa por causa do !
        resultado('altura invalido', false)
        return;
    }

    const imc = getimc(peso, altura)
    console.log (imc)
})

function getimc (peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2) // retornar com 2 casas decimais

}

function criaP () {
    const p = document.createElement('p'); // isso cria um novo elemento e adiciona nele um css mesmo
    return p;
}
function resultado (msg, isvalid) {
    const resultado = document.querySelector ('.resultadoP')
    resultado.innerHTML = '';

    const p = criaP()
    p.innerHTML = (msg)
    resultado.appendChild(p)
}



