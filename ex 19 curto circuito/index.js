/*

    && -> False & true -> false
    || -> False & true -> true

    valores que apontam em false automaticamente    

    ( graves, aspas e aspas duplas  )
     null / undefined
     Nan
*/

console.log ('LUIZ' && ' ' && 'Maria')

function falaoi () {    
    return 'oi'
}

const vaiexecutar = false;

console.log (vaiexecutar && falaoi)

console.log ( null || 'gustavo' || null || true || false)

const corusuario = false
const corgenerica = 'azul'

console.log (corusuario || corgenerica)







