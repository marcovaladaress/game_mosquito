
let altura = 0
let largura = 0


function ajustaTamanhoPalcoJogo(){

        altura = window.innerHeight
        largura = window.innerWidth  


        console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()



function posicaoRandomica(){

// criação da posição randomica 
    if ( document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

    }
    // criação da posição randomica 
    

    let posicaox = Math.floor(Math.random() * largura) - 90
    let posicaoy = Math.floor(Math.random() * altura) - 90 


    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0 : posicaoy

    
    console.log(posicaox,posicaoy)
    
    
    
    // criando elemento Html
    
     let mosquito = document.createElement('img')
     mosquito.src = 'imagens/mosca.png'
     mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
     mosquito.style.left = posicaox + 'px'
     mosquito.style.top = posicaoy + 'px'
     mosquito.style.position = 'absolute'
     mosquito.id = 'mosquito'
    
    document.body.appendChild(mosquito)

    console.log(tamanhoAleatorio()) 
    console.log(ladoAleatorio())


}


// tamanho do elemento 
function tamanhoAleatorio(){

    let classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0 :
            return 'mosca1'
        
        case 1 : 
        
             return 'mosca2'

        case 2 : 

             return 'mosca3'
    }
    
}


function ladoAleatorio () {

    let classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0 :
            return 'ladoA'
        
        case 1 : 
        
             return 'ladoB'

        
    }


}






