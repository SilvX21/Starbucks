let circulo = document.querySelector(".circulo")
let imagem = document.querySelector(".starbucks")

function trocarCor(cor) {
    circulo.style.background = cor
}

function trocarImagem(arquivoImagem){
    imagem.src = arquivoImagem
}

function trocarTamanho(tamanho) {
    imagem.style.width = tamanho
}