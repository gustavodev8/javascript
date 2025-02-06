function Myescopo () {
    const aleatorio = document.querySelector('.container')

function derrubadordeevento (evento){
    evento.preventDefault()
}

aleatorio.addEventListener('submit', derrubadordeevento)
}

Myescopo()