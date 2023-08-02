const result = document.querySelector('.result')
const yourResult = document.querySelector('.yourResult')
const machineResult = document.querySelector('.machineResult')
const atualizar = document.querySelector('.zerar')
let humanResult = 0
let ResultMachine = 0


const refresh = () =>{
location.reload(atualizar)
}

    const playHuman = (choices) =>{
    playTheGame (choices ,playMachine())
}


const playMachine =() =>{
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber =  Math.floor(Math.random() * 3)
    const result = choices[randomNumber]
    return result
}


const playTheGame = (human, machine) =>{
    console.log( ' humano: ' + human +  ' computador: ' + machine)    
    if(human === machine ){
        result.innerHTML = 'Deu Empate'
    }else if(human === 'rock' && machine === 'scissors' || human === 'paper' && machine ==='rock' || human === 'scissors' && machine === 'paper'){
        humanResult++
        yourResult.innerHTML= humanResult
        result.innerHTML = 'Voce Ganhou!!'
    }else{
        ResultMachine++
        machineResult.innerHTML= ResultMachine
        result.innerHTML = 'O Computador Ganhou!'
    }
}

