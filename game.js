
let altura = 0
let largura = 0
let vidas = 1
let tempo = 15

let criaMoscaTempo = 1300



let nível = window.location.search
nível = nível.replace('?', '')

if(nível === 'normal') {

criaMoscaTempo = 1300

}else if (nível === 'dificil'){
    criaMoscaTempo = 900
   
} else if(nível === 'chucknorris'){
    criaMoscaTempo = 220
}


    
   

function ajustaTamanhoPalcoJogo(){

        altura = window.innerHeight
        largura = window.innerWidth  


        console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()


let cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0) {
        
        clearInterval(cronometro)
        clearInterval(criaMosca)
         window.location.href = 'vitoria.html'
      
    }else {
        document.getElementById('cronometro').innerHTML = tempo

    }
  
    

},1000)



function posicaoRandomica(){

// remover o mosquito anterior ( caso exista)
    if ( document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if(vidas > 3){
           
              window.location.href = 'fim_de_jogo.html'

        } else {
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
            vidas++
        }
        
    }

    

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
     mosquito.onclick = function(){
        this.remove()
     }
     
    
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

// transição de lado 

function ladoAleatorio () {

    let classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0 :
            return 'ladoA'
        
        case 1 : 
        
             return 'ladoB'

        
    }


}






