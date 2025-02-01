let valA = 'A'
let valB = "B"
let valC = "C"

const VarAA = valA
valA = valB
valB = valC
valC = VarAA
console.log (valA, valB, valC)
