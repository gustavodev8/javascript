/*
OPERADORES LOGICOS 
&& --> and -> E  FALSE // TRUE = FALSE (o resultado retornado sera falso mesmo)
| |-> OR -> ou   FALSE / TRUE = TRUE  (o resultado voltado sera true mesmo)
! -> not -> não
*/ 



console.log (true && true && true && true); // todas as expressoesprecisam ser verdadeiras para ser verdadeira casa um so esteja falsa o valor total sera false tbm 

console.log (true && true && false && true); // um exemplo aqui, todo o valor virou false somente por causa de um false

console.log (true || false || false) // se uma expressao tiver verdadeira o valor retornara verdadeiro tbm

const usuario = 'gustavo';
const senha = ('12345')
                                //true                 //true
const vailogar = usuario === 'gustavo' && senha === '12345'
console.log (vailogar)  // consequentemente aqui vira todo true



