class Countdown {
    constructor(time) {
        this.time = time;
    }
    breakTime() {
        this.time = this.time * 0.20;
    }
    setTime() {
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
    decreaseTime() {
        this.time = this.time - 1;
    }
}
