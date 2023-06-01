function fotos() {
    var galeria = document.getElementById('galeria')

    galeria.innerHTML = '<p> Isso aqui vocês já sabem fazer. </p>'
    galeria.innerHTML += '<img id="imagem" height="150" src="imagens/chocolate.jpg">'

    var img = document.createElement('img')
    img.setAttribute('src', 'imagens/lanche.jpg')
    img.setAttribute('alt', 'Imagem de um lanche.')
    img.setAttribute('height', '150')

    galeria.appendChild(img)
}