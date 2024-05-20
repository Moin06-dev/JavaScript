const Clock = document.getElementById('clock')


 
setInterval(function (){
    let date = new Date();
    Clock.innerHTML = date.toLocaleTimeString();

},1000)