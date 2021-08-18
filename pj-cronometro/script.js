let display = document.getElementById('display')

let minutos = document.getElementById('minuto')
let segundos = document.getElementById('segundo')

let comecar = document.getElementById('comecar')

let minutoAtual
let segundoAtual


let interval

for(let i = 0; i <= 60; i++) {
    minutos.innerHTML += '<option value="'+i+'"> '+i+'</option>'
}

for(let i = 1; i <= 60; i++) {
    segundos.innerHTML += '<option value="'+i+'"> '+i+'</option>'
}

comecar.addEventListener('click', function(){
    minutoAtual = minutos.value
    segundoAtual = segundos.value

    display.childNodes[1].innerHTML = minutoAtual + ':' + segundoAtual

    interval = setInterval(function(){
        
        segundoAtual--

        if(segundoAtual <= 0) {
            
            if(minutoAtual > 0) {
            
                minutoAtual--
                segundoAtual = 59
            
            } else {
            
                document.getElementById('sound').play();
                alert('Terminou!')
                clearInterval(interval)
            
            }
        }
        display.childNodes[1].innerHTML = minutoAtual + ':' + segundoAtual
    }, 1000)
})