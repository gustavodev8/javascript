function MeuEscopo() {
    const evento = document.querySelector('.forma')
    const escrever = document.querySelector ('.result')

    const pessoas = [] 
    function derrubadordeevento(derrubar) {
        derrubar.preventDefault()
        const nome = document.querySelector('.nome')
        const sobrenome = document.querySelector('.sobrenome')
        const peso = document.querySelector ('.peso')
        const altura = document.querySelector ('.altura')
        console.log (derrubar)

    pessoas.push ({
        nome: nome.value ,
        sobrenome: sobrenome.value ,
        peso: peso.value , 
        altura: altura.value

    })
    document.body.innerHTML += 'Dados recebidos viu'   
    } 
    evento.addEventListener('submit', derrubadordeevento)

}
MeuEscopo();