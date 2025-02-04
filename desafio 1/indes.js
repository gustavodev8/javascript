function MeuEscopo() {
    const aleatorio = document.querySelector('.forma')
    const resultado = document.querySelector('.result')

    const pessoas = [];
    function derrubadorevento(evento){
        evento.preventDefault();
        const nome = document.querySelector('.nome')
        const sobrenome = document.querySelector('.sobrenome')
        const peso = document.querySelector('.Peso')
        const altura = document.querySelector('.Altura')

        pessoas.push ({
          nome:  nome.value,
          sobrenome: sobrenome.value,
          peso: peso.value ,
          altura: altura.value
        });
        
        console.log (pessoas);
        resultado.innerHTML += 'DADOS RECEBIDOS <br>' + nome.value + '<br>' + sobrenome.value + '<br>' +  peso.value + '<br>' + altura.value + '<br>'
    }

    aleatorio.addEventListener('submit', derrubadorevento)
}   
MeuEscopo();