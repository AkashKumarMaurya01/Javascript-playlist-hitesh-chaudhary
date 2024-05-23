# Solution code

## Color picker  Project  1 code 


```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="2_style.css" />
    <!-- <link rel="stylesheet" href="../styles.css" /> -->
    <title>JavaScript Background Color Switcher</title>
</head>

<body>
    <nav>
        <a class="home" href="http://127.0.0.1:5500/7_Projects/1_color_changer.html" aria-current="page">Home</a>
        <a class="youtube" target="_blank" href="https://www.youtube.com/@chaiaurcode">Youtube channel</a>
    </nav>
    <div class="canvas">

        <h1>Color Scheme Switcher</h1>
        <span class="button" id="grey"></span>
        <span class="button" id="white"></span>
        <span class="button" id="blue"></span>
        <span class="button" id="yellow"></span>
        <span class="button" id="purple"></span>
        <h2>
            Try clicking on one of the colors above
            <span>to change the background color of this page!</span>
        </h2>
    </div>
    <script src="3_project.js"></script>
</body>

</html>


```

```CSS
html {
  margin: 0;
}

span {
  display: block;
  
}
.canvas {
  margin: 100px auto 100px;
  width: 80%;
  text-align: center;
}

.button {
  width: 100px;
  height: 100px;
  border: solid black 2px;
  display: inline-block;
}

#grey {
  background: grey;
}

#white {
  background: white;
}
#blue {
  background: blue;
}
#yellow {
  background: yellow;
}
#purple
{
    background-color: purple;
}
nav {
  display: flex;
  justify-content: center;
  margin: auto 0;
  gap: 15px;
  width: 100%;
}

.home {
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

```JAVA SCRIPT

const buttons  = document.querySelectorAll(".button")
const b = document.querySelector("body")
// console.log(body);
buttons.forEach( (item)=>
{
     item.addEventListener('click' , (e)=>
    {
         console.log(e);
         console.log(e.target); // <span class="button" id="grey"></span>
            if(e.target.id==='grey')
            {
                b.style.background = e.target.id;
            }
            if(e.target.id==='yellow')
            {
                b.style.background = e.target.id;
            }
            if(e.target.id==='white')
            {
                b.style.background = e.target.id;
            }
            if(e.target.id==='blue')
            {
                b.style.background = e.target.id;
            }
            if(e.target.id==='purple')
            {
                b.style.background = e.target.id;
            }

    });
});

```
