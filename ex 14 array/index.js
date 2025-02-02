let nomes = ['gustavo', 'santana', 'zero', 'bolinha', 'goku', 'gogeta', 'vegeta', 'vegetto']
            //ISSO É UM ARRAY

nomes[nomes.length] = 'oku'  //metodo de adicionar mais coisas no fim array
nomes[nomes.length] = 'picolu' //metodo de adicionar mais coisas no fim array

console.log (nomes.length) // saber o tamanho do array


nomes[8] = 'gustavuuu'

console.log (nomes[7]) 
console.log (nomes[8])
console.log (nomes[9])

nomes.push ('pedrinho') //metodo de adicionar mais coisas no fim array
nomes.push ('andrezin') //metodo de adicionar mais coisas no fim array
console.log (nomes)

nomes.unshift ('one') //metodo de adicionar mais coisas no começo da array
nomes.unshift ('two') //metodo de adicionar mais coisas no começo da array
console.log (nomes)

// TODOS ELES ALTERAM INDICES!!!!!!!!!!!!

delete nomes [2]
console.log (nomes) //esse esclui sem mexer na posição dos indices
nomes.pop () //remove o ultimo elemento da array ou qualquer um escolhido
console.log (nomes)

nomes.shift () // metodo de remover o primeiro elemento da array
console.log (nomes)
