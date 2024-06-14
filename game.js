
let altura = 0
let largura = 0


function ajustaTamanhoPalcoJogo(){

        altura = window.innerHeight
        largura = window.innerWidth  


        console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()



function posicaoRandomica(){

    let posicaox = Math.floor(Math.random() * largura) - 90
    let posicaoy = Math.floor(Math.random() * altura) - 90 


    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0 : posicaoy

    
    console.log(posicaox,posicaoy)
    
    
    
    // criando elemento Html
    
     let mosquito = document.createElement('img')
     mosquito.src = 'imagens/mosca.png'
     mosquito.className = 'mosca1'
     mosquito.style.left = posicaox + 'px'
     mosquito.style.top = posicaoy+ 'px'
     mosquito.style.position = 'absolute'
    
    document.body.appendChild(mosquito)



}






