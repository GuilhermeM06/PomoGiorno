class Countdown {
    constructor(time) {
        this.time = time;
    }
    setTimer() {
        const minutes = Math.floor(this.time / 60);
        const seconds = this.time % 60;
        let minutesString = String(minutes);
        let secondsString = String(seconds);
        if (minutes < 10) {
            minutesString = "0" + minutesString;
        }
        if (seconds < 10) {
            secondsString = "0" + secondsString;
        }
        document.getElementById('minutes').innerHTML = minutesString;
        document.getElementById('seconds').innerHTML = secondsString;
    }
    set changeTime(time) {
        this.time = time;
    }
    startCountdown() {
        let time = this.time;
        this.changeTime = time - 1;
    }
    startInterval() {
        this.changeTime = this.time * 0.20;
    }
}
