export class Timer {

    time;
    counter = 0;

    constructor(time){
        this.time = time;
    }

    setTimer(minutes, seconds){

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

    timer(){
        const work = this.time
        const breakTime = this.time * 0.20

        let minutes = Math.floor(work / 60)
        let seconds = work % 60

        let minutesBreak = Math.floor(breakTime / 60)
        let secondsBreak = breakTime % 60

        const btnStart = document.getElementById('starter')
        const btnCancel = document.getElementById('finisher')

        let startTime;

        this.setTimer(minutes, seconds)

        btnStart.addEventListener('click', () => {
            if(startTime === undefined){
                startTime = setInterval(() => {
                    if(seconds != 0){
                        seconds--
                    } else if(minutes != 0 && seconds == 0){
                        seconds = 59;
                        minutes--;
                    }
                    this.setTimer(minutes, seconds)
                
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
                         this.setTimer(minutesBreak, secondsBreak)
                    }
                
                    if(minutes == 0 && seconds == 0 && minutesBreak == 0 && secondsBreak == 0){
                        Toast.show("Ciclo concluido, Parabéns!!", 'complete_cicle')
                        this.setCounter(1)
                        this.stopTimer(startTime)
                        startTime = undefined
                        document.getElementById('clock').style.color = '#004b23'
                        minutes = Math.floor(work / 60);
                        seconds = work % 60
                
                        minutesBreak = Math.floor(breakTime / 60)
                        secondsBreak = breakTime % 60
                        this.setTimer(minutes, seconds)
                    }
                }, 1000);
            } else {
                Toast.show('O ciclo já foi iniciado!', 'error')
            }
        })

        btnCancel.addEventListener('click', () => {
            document.getElementById('clock').style.color = '#004b23'
            minutes = Math.floor(work / 60);
            seconds = work % 60
        
            minutesBreak = Math.floor(breakTime / 60)
            secondsBreak = breakTime % 60
            this.stopTimer(startTime)
            startTime = undefined;
            this.setTimer(minutes, seconds)
        
        })
    }

    stopTimer(startTime){
        clearInterval(startTime)
        startTime = undefined;
    }

    setCounter(count){
        this.counter += count
        document.getElementById('contador').innerHTML = String(this.counter)
    }
}