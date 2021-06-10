const contador = new Countdown(25, 0);
const btnSt = document.getElementById('starter')
var startTime;


btnSt.addEventListener('click', () => {
    if(startTime === undefined){
        startTime = setInterval(contador.timer, 1000);
    } else {
        alert('Time is already running')
    }
})