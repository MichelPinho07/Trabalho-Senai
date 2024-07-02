
let filmes = []
const div = document.querySelector(`#lista-filme`)
function enviarFilme() {
    const dadosFilme = []
    const form = document.querySelector(`form`)
    const input = new FormData(form)


    const foto = input.get(`foto`)
    const titulo = input.get(`titulo`)
    const autor = input.get(`autor`)
    const data = input.get(`data`)
    const genero = input.get(`genero`)
    const duracao = input.get(`duracao`)
    const sinopse = input.get(`sinopse`)
    dadosFilme.push(foto, titulo, autor, data, genero, duracao, sinopse)
    filmes.push(dadosFilme)

    localStorage.setItem(`filmes`, JSON.stringify(filmes))

    div.innerHTML += `<div>
    <img src="${dadosFilme[0]}" alt="">
    <h2>${dadosFilme[1]}</h2>
    <p>${dadosFilme[2]}</p>
    <p>${dadosFilme[3]}</p>
    <p>${dadosFilme[4]}</p>
    <p>${dadosFilme[5]} minutos</p>
    <p>${dadosFilme[6]}</p>
</div>`
}
function dados(){
    let contagem = 0
    for (const dadosFilme of filmes) {
        div.innerHTML += `<div>
        <img src="${dadosFilme[0]}" alt="">
        <h2>${dadosFilme[1]}</h2>
        <p id="negrito">Nome do autor: ${dadosFilme[2]}</p>
        <p id="negrito">Data de lançamento: ${dadosFilme[3]}</p>
        <p id="negrito">Gênero: ${dadosFilme[4]}</p>
        <p id="negrito">Duração: ${dadosFilme[5]} minutos</p>
        <p>${dadosFilme[6]}</p>
        <button onclick="excluir(${contagem})">Excluir</button>
    </div>`
        contagem++
    }
}
let filmesArmazenados = localStorage.getItem(`filmes`)
if (filmesArmazenados) {
    filmes = JSON.parse(filmesArmazenados)
    
    dados()
}
function excluir(indice){
    filmes.splice(indice, 1)
    localStorage.setItem(`filmes`, JSON.stringify(filmes))
    div.innerHTML = ``
    dados()
}

function ocultar(){
    const form = document.querySelector(`form`)
    form.classList.toggle(`oculto`)
}