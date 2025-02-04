function MeuEscopo () {
    let contador = 0;

    const form = document.querySelector('.forma'); //PARTE RESPONSAVEL EM RECONHECER HTML

    function recebeevento(evento) { // PARTE EM QUE ELIMINARA O ACONTECIMENTO
        evento.preventDefault();
        console.log ('recebeu'+ contador);
        contador++;
    }

    form.addEventListener('submit', recebeevento); //PARTE QUE BOTA ISSO EM AÇÃO QUANDO APERTAR EM ENVIAR
}
MeuEscopo();
