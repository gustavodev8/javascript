const section = document.querySelector('.container')
section.addEventListener('submit', function (evento)) {
evento.preventDefault()
imcdado('ola mundo')
}


    function imcdado1 (msg) {
        const completo = document.querySelector('#imcdado')
        completo.innerHTML = msg
    }


