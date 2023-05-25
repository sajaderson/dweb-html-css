var valor1 = 2
var valor2 = 5
var valor3 = 10
var valor4 = Number.parseInt('1')

/* Strings -> Textos - > Precisam estar entre aspas.*/

console.log(typeof valor1)
console.log(typeof valor4)

var resultado = valor4 + valor1 + valor2

console.log(typeof valor4)

/* Quando tentamos realizar a soma entre um number e uma string o javascript faz uma concatenação.*/

console.log(`O resultado da operação é: ${resultado}`)
console.log(`O resultado da operação é: ${valor3 * valor2}`)