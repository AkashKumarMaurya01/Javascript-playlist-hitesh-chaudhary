# Project 3 

## CLOCK code solution 

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <title>Your Local Time</title>
    <style>
      body {
        background-color: #212121;
        color: #fff;
      }
      .center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
       
        flex-direction: column;
      }
      #Clock {
        font-size: 40px;
        background-color: orange;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;
      }
    </style>
  </head>
  <body>
    <nav>
        <a class="home" href="http://127.0.0.1:5500/9_project%20digital%20clock/index.html" aria-current="page">Home</a>
        <a class="youtube" target="_blank" href="https://www.youtube.com/@chaiaurcode"
          >Youtube channel</a
        >
      </nav>
    

    
    <div class="center">
      <div id="banner"><span>Your local time</span></div>
      <div id="Clock"></div>
    </div>
    <script src="clock.js"></script>
  </body>
</html>


```

``` CSS
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

``` Java Script
 const clock = document.querySelector("#Clock")

 
 setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    
 }, 1000);
 
 

```