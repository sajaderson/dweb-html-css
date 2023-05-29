function media() {
    var nome = prompt('Qual é o nome do aluno?')
    var nota1 = Number.parseInt(prompt(`Qual foi a primeira nota do aluno ${nome}`))
    var nota2 = Number.parseInt(prompt(`Qual foi a primeira nota do aluno ${nome}`))

    var media = (nota1 + nota2) / 2

    var situacao = media >= 7?'Aprovado':'Reprovado'

    resultado.innerHTML = `<p>Calculando a média final de ${nome}.</p>`
    resultado.innerHTML += `<p>As notas obtidas foram ${nota1} e ${nota2}.</p>`
    resultado.innerHTML += `<p>A média final será ${media}.</p>`
    resultado.innerHTML += `<p>O aluno ${nome} está ${situacao}.</p>`

}