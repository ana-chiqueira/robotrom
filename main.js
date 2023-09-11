const controle = document.querySelector("[data-controle]")
const pecas ={
    "bracos":{
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem":{
        "forca": 41,
    }
    
}
controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}
