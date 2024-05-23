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
