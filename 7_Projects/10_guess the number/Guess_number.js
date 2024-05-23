let Random = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const UserInput = document.querySelector("#guessField");
const Guessed_arr = document.querySelector(".guesses");
const remaning = document.querySelector(".lastResult");
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let NumGuess = 0;

let playgame = true;

if (playgame) {

    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const Guess = parseInt(UserInput.value);
        validate(Guess);
    })

}


function validate(Guess) {
    if (isNaN(Guess)) {
        alert(`Please enter a valid number ${Guess}`);
    }
    else if (Guess < 1 || Guess > 100) {
        alert(`Please enter number in range of 1 to 100 your number is ${Guess}`);
    }
    else {

       
        if (NumGuess === 10) {
            displayGuess(Guess)
            displaymsg(`Game over Random number  was ${Random}`)
            EndGame()
        }
        else {
            displayGuess(Guess);
            checkGuess(Guess)
        }
    }
}
function checkGuess(Guess) {

    if (Guess === Random) {
        displaymsg(`You Guessed it right `)
        EndGame()
    }
    else if (Guess < Random) {
        displaymsg(`You Guessed it Tooo low`)

    }
    else if (Guess > Random) {
        displaymsg(`You Guessed it Too high `)
    }

    //
}
function displayGuess(Guess) {
    UserInput.value = ''
    Guessed_arr.innerHTML += `${Guess} `
    NumGuess++;
    remaning.innerHTML = `${10 - NumGuess}`
}
function displaymsg(message) {

    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function startGame() {

    const newgame = document.querySelector("#newgame")

    newgame.addEventListener('click', function (e) {
        Random = parseInt(Math.random() * 100 + 1);
        playgame = true;
        NumGuess =0;
        remaning.innerHTML = `${10 - NumGuess}`;
        UserInput.removeAttribute('disabled')
        startOver.removeChild(p);
        Guessed_arr.innerHTML = ""
        


})

}
function EndGame() {
    UserInput.value = '';
    UserInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newgame">Start a NEW GAME</h2>`
    startOver.appendChild(p);
    playgame = false;
    startGame()
}




