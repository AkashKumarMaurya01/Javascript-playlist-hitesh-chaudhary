# Project 2

## BMI calculator code  

``` HTML 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>BMI Calculator</title>
  </head>
  <body>
    <nav>
      <a class="home" href="/" aria-current="page">Home</a>
      <a class="youtube" target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="container">
      <h1>BMI Calculator</h1>
      <form>
        <p><label>Height in CM: </label><input type="text" id="height" /></p>
        <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
        <button>Calculate</button>
        <div id="results"></div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>
      </form>
    </div>
  </body>
  <script src="javascript.js"></script>
</html>


```
```CSS
.container {
    width: 575px;
    height: 825px;
  
    background-color: #797978;
    padding-left: 30px;
  }
  #height,
  #weight {
    width: 150px;
    height: 25px;
    margin-top: 30px;
  }
  
  #weight-guide {
    margin-left: 75px;
    margin-top: 25px;
  }
  
  #results {
    font-size: 35px;
    margin-left: 90px;
    margin-top: 20px;
    color: rgb(241, 241, 241);
  }
  
  button {
    width: 150px;
    height: 35px;
    margin-left: 90px;
    margin-top: 25px;
    background-color: #fff;
    padding: 1px 30px;
    border-radius: 8px;
    color: #212121;
    text-decoration: none;
    border: 2px solid #212121;
  
    font-size: 25px;
  }
  
  h1 {
    padding-left: 15px;
    padding-top: 25px;
    
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
  }
```
```Java Script
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results')

    if (height < 0 || isNaN(height) || height === '') {
        result.innerHTML = `Please enter a valid height ${height}`;
    }
    else if (weight < 0 || isNaN(weight) || weight === '') {
        result.innerHTML = `Please enter a valid height ${weight}`;
    }
    else {

        const BMI = (weight) / ((height * height) / 10000).toFixed(2);
        //  result.innerHTML = `${BMI}`
        if (BMI < 18) {
            result.innerHTML = `under weight with bmi ${BMI}`
        }
        else if (BMI < 24 && BMI > 18) {
            result.innerHTML = `under normal range with bmi ${BMI}`
        }
        else {
            result.innerHTML = `under over with bmi ${BMI}`
        }


    }






});


```