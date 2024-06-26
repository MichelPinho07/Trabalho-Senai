
let filmes =[]
function enviarFilme(){
    let dadosFilme = []
    const form = document.querySelector(`form`)
    const input = new FormData(form)
    const div = document.querySelector(`#lista-filme`)

    const foto = input.get(`foto`)
    const titulo = input.get(`titulo`)
    const autor = input.get(`autor`)
    const data = input.get(`data`)
    const genero = input.get(`genero`)
    const duracao = input.get(`duracao`)
    const sinopse = input.get(`sinopse`)
    dadosFilme.push(foto, titulo, autor, data, genero, duracao, sinopse)
    filmes.push(dadosFilme)

    localStorage.setItem(`filmes`, JSON.stringify(dadosFilme))

    div.innerHTML += `<div>
    <img src="${dadosFilme[0]}" alt="">
    <h2>${dadosFilme[1]}</h2>
    <p>${dadosFilme[2]}</p>
    <p>${dadosFilme[3]}</p>
    <p>${dadosFilme[4]}</p>
    <p>${dadosFilme[5]}</p>
    <p>${dadosFilme[6]}</p>
</div>`
}
let filmesArmazenados = localStorage.getItem(`filmes`)
if(filmesArmazenados){
    filmes = JSON.parse(filmesArmazenados)

    for(const dadosFilme of filmes){
        div.innerHTML += `<div>
    <img src="${dadosFilme[0]}" alt="">
    <h2>${dadosFilme[1]}</h2>
    <p>${dadosFilme[2]}</p>
    <p>${dadosFilme[3]}</p>
    <p>${dadosFilme[4]}</p>
    <p>${dadosFilme[5]}</p>
    <p>${dadosFilme[6]}</p>
</div>`
     
    }
}

