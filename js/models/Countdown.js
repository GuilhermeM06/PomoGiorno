class Countdown {
    constructor(minutes, seconds) {
        this.minutes = minutes;
        this.seconds = seconds;
    }
    setTimer(min, sec) {
        let minutes = min;
        let seconds = sec;
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
    timer() {
        const breakTime = this.minutes * 0.20;
        let minutes = this.minutes;
        let seconds = this.seconds;
        let minutesBreak = breakTime;
        let secondsBreak = this.seconds;
        if (seconds != 0) {
            seconds--;
        }
        else if (minutes != 0 && seconds == 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes == 0 && seconds == 0) {
            if (secondsBreak != 0) {
                secondsBreak--;
            }
            else if (minutesBreak != 0 && secondsBreak == 0) {
                secondsBreak = 59;
                minutesBreak--;
            }
        }
        if (minutes == 0 && seconds == 0 && minutesBreak == 0 && secondsBreak == 0) {
            minutes = this.minutes;
            seconds = this.seconds;
            minutesBreak = breakTime;
            secondsBreak = this.seconds;
        }
        this.setTimer(minutes, seconds);
    }
    stopTimer(startTime) {
        clearInterval(startTime);
        startTime = undefined;
    }
}
