function cadastro() {
    var nome = document.getElementById('input-nome').value
    var resultado = document.querySelector('#resultado')

    console.log(nome)

    resultado.innerHTML = `Seu nome é: ${nome}`
}