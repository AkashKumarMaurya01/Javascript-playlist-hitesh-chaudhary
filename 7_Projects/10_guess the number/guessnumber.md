# Project 4

## Solution code 

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css">

</head>

<body style="background-color:#212121; color:#fff;">
    <nav>
        <a class="home" href="http://127.0.0.1:5500/9_project%20digital%20clock/index.html" aria-current="page">Home</a>
        <a class="youtube" target="_blank" href="https://www.youtube.com/@chaiaurcode"
          >Youtube channel</a
        >
      </nav>

    <div id="wrapper">
        <h1>Number guessing game</h1>
        <p>Try and guess a random number between 1 and 100.</p>
        <p>You have 10 attempts to guess the right number.</p>
        
        <form class="form">
            <label for="guessField" id="guess">Guess a number</label>
                <input type="text" id="guessField" class="guessField">
                <input style="cursor: pointer;" type="submit" id="subt" value="Submit guess" class="guessSubmit">
        </form>

        <div class="resultParas">
            <p>Previous Guesses: <span class="guesses"></span></p>
            <p>Guesses Remaining: <span class="lastResult">10</span></p>
            <p class="lowOrHi"></p>
        </div>
    </div>
    <script src="Guess_number.js"></script>
</body>

</html>
```


```CSS
html {
    font-family: sans-serif;
  }
  
  body {
    width: 300px;
    max-width: 750px;
    min-width: 480px;
    margin: 0 auto;
    background-color: #212121;
  }
  
  .lastResult {
    color: white;
    padding: 7px;
  }
  
  .guesses {
    color: white;
    padding: 7px;
  }
  
  button {
    background-color: #141414;
    color: #fff;
    width: 250px;
    height: 50px;
    border-radius: 25px;
    font-size: 30px;
    border-style: none;
    margin-top: 30px;
    /* margin-left: 50px; */
  }
  
  #subt {
    background-color: #161616;
    color: #ffffff;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    font-size: 20px;
    border-style: none;
    margin-top: 50px;
    /* margin-left: 75px; */
  }
  
  #guessField {
    color: #000;
    width: 250px;
    height: 50px;
    font-size: 30px;
    border-style: none;
    margin-top: 25px;
  
    /* margin-left: 50px; */
    border: 5px solid #6c6d6d;
    text-align: center;
  }
  
  #guess {
    font-size: 55px;
    /* margin-left: 90px; */
    margin-top: 120px;
    color: #fff;
  }
  
  .guesses {
    background-color: #7a7a7a;
  }
  
  #wrapper {
    box-sizing: border-box;
    text-align: center;
    width: 450px;
    height: 100%;
    background-color: #474747;
    color: #fff;
    font-size: 25px;
  }
  
  h1 {
    background-color: #161616;
  
    color: #fff;
    text-align: center;
  }
  
  p {
    font-size: 16px;
    text-align: center;
  }
  nav {
    display:flex;
    justify-content: start;
    margin: auto 0;
    gap: 15px;
    width: 100%;
  }
.home{
    border: 2px solid black;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    width: 180px;
    text-align: center;
    background-color: rgb(231, 230, 230);
  }
  .youtube {
    border: 2px solid black;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    width: 180px;
    text-align: center;
    background-color: #fff;
  }

```

```JavaScript

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





```