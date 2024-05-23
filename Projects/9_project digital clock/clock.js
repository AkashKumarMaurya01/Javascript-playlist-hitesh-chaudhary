 const clock = document.querySelector("#Clock")

 
 setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    
 }, 1000);
 
 
