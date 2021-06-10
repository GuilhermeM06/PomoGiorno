const Tempo = {

    setTime(tempo){
        const minutes = Math.floor(tempo / 60)
        const seconds = tempo % 60

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
    },

    timer(tempo){
        const btnStart = document.getElementById('starter')
        btnStart.addEventListener('click', () => {
            const timer = setInterval(() => {
                tempo -= 1
                Tempo.setTime(tempo)
                if(tempo <= 0){
                    clearInterval(timer)
                }
            },1000)
            Tempo.stopTimer(timer)
        })
    },

    stopTimer(timer){
        const btnCancel = document.getElementById('finisher')
        btnCancel.addEventListener('click',() =>{
            clearInterval(timer)
        })
    }
}