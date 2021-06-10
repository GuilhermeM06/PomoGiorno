const work = 1500
const breakTime = 1500 * 0.20

let minutes = Math.floor(work / 60)
let seconds = work % 60

let minutesBreak = Math.floor(breakTime / 60)
let secondsBreak = breakTime % 60

const btnStart = document.getElementById('starter')
const btnCancel = document.getElementById('finisher')


function setTimer(minutes, seconds){

    let minutesString = String(minutes)
    let secondsString = String(seconds)

    if(minutes < 10){
        minutesString = "0" + minutesString
    }

    if(seconds < 10){
        secondsString = "0" + secondsString
    }

    document.getElementById('minutes').innerHTML = minutesString
    document.getElementById('seconds').innerHTML = secondsString

}

var startTime;


btnStart.addEventListener('click', () => {
    if(startTime === undefined){
        startTime = setInterval(timer, 1000);
    } else {
        alert('Time is already running')
    }
})


btnCancel.addEventListener('click', () => {
    document.getElementById('clock').style.color = '#004b23'
    minutes = Math.floor(work / 60);
    seconds = work % 60

    minutesBreak = Math.floor(breakTime / 60)
    secondsBreak = breakTime % 60
    stopTimer()

    setTimer(minutes, seconds)

})


function timer() {

    if(seconds != 0){
        seconds--
    } else if(minutes != 0 && seconds == 0){
        seconds = 59;
        minutes--;
    }

    setTimer(minutes, seconds)

    if(minutes == 0 && seconds == 5){
        Toast.show("O intervalo irá iniciar logo", 'break')
    }

    if(minutes == 0 && seconds == 0){
        document.getElementById('clock').style.color = '#0077b6'

         if(secondsBreak != 0){
             secondsBreak--
         } else if(minutesBreak != 0 && secondsBreak == 0){
             secondsBreak = 59;
             minutesBreak--;
         }
         setTimer(minutesBreak, secondsBreak)
    }

    if(minutes == 0 && seconds == 0 && minutesBreak == 0 && secondsBreak == 0){
        Toast.show("Ciclo concluido, Parabéns!!", 'complete_cicle')
        stopTimer()
        document.getElementById('clock').style.color = '#004b23'
        minutes = Math.floor(work / 60);
        seconds = work % 60

        minutesBreak = Math.floor(breakTime / 60)
        secondsBreak = breakTime % 60
        setTimer(minutes, seconds)
    }

    

}

function timeBreak() {

    if(secondsBreak != 0){
        secondsBreak--
    } else if(minutesBreak != 0 && secondsBreak == 0){
        secondsBreak = 59;
        minutesBreak--;
    }
    setTimer(minutesBreak, secondsBreak)
}

function stopTimer(){
    clearInterval(startTime)
    startTime = undefined;
}


// Teste ===============================================================================
setTimer(minutes, seconds)






