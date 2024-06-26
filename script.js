let dadosFilme = []
let filmes =[]
function enviarFilme(event){
    event.preventDefault()
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

    localStorage.setItem(`filmes`, JSON.stringify(dadosFilme))

    div.innerHTML += `<div>
    <img src="${foto}" alt="">
    <h2>${titulo}</h2>
    <p>${autor}</p>
    <p>${data}</p>
    <p>${genero}</p>
    <p>${duracao}</p>
    <p>${sinopse}</p>
</div>`
}

const valorDoLocalStorage = localStorage.getItem('filmes')
dadosFilme = JSON.parse(valorDoLocalStorage)
mostrarItens()

function mostrarItens() {
     
     const divLista = document.querySelector('#lista-filme')
     
     divLista.innerHTML = ''
     
     for(let contador = 0; contador < listaNomes.length; contador++){
         divLista.innerHTML += listaNomes[contador] + '<br>'
     }
}

