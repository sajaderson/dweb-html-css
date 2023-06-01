function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoUsuario = Number(document.getElementById('input_ano').value)
    var resultado = document.getElementById('resultado')
    var idade = anoAtual - anoUsuario

    resultado.innerHTML = `<p>Você esta com ${idade} anos.</p>`

    var input_radio = document.getElementsByName('radsex')
    var genero = ''

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(input_radio[0].checked) {
        genero = 'Homem'

        if (idade >= 0 && idade < 12){
            img.setAttribute('src', 'imagens/criança-homem.jpg')
        } else if (idade < 21) {
            img.setAttribute('src', 'imagens/jovem-homem.jpg')
        } else if (idade < 50) {
            img.setAttribute('src', 'imagens/adulto-homem.jpg')
        } else {
            img.setAttribute('src', 'imagens/idoso-homem.jpg')
        }

    } else {
        genero = 'Mulher'

        if (idade >= 0 && idade < 12){
            img.setAttribute('src', 'imagens/criança-mulher.jpg')
        } else if (idade < 21) {
            img.setAttribute('src', 'imagens/jovem-mulher.jpg')
        } else if (idade < 50) {
            img.setAttribute('src', 'imagens/adulto-mulher.jpg')
        } else {
            img.setAttribute('src', 'imagens/idoso-mulher.jpg')
        }
    }

    resultado.appendChild(img)

}