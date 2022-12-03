let computerNumber
let userNumbers = []
let attempts = 0
const chances = 5

function init(){
    computerNumber = Math.floor(Math.random() * 100 +1)
    console.log(computerNumber)
}

function guessTheNumber(){
    let userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers
    attempts++

    if (attempts <= chances){
        if (userNumber > computerNumber){
            document.getElementById('textOutput').innerHTML = 'Your guess is too high'
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').value = ''
        }
        else if (userNumber < computerNumber){
            document.getElementById('textOutput').innerHTML = 'Your guess is too low'
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').value = ''
        }
        else {
            document.getElementById('textOutput').innerHTML = 'Congratulations!'
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').setAttribute('Readonly', '')             
        }
    }
    else {
        document.getElementById('textOutput').innerHTML = `You Lose!<br>The number was ${computerNumber}`
        document.getElementById('inputBox').setAttribute('Readonly', '') 
    } 
}

function newGame(){
    window.location.reload()
}