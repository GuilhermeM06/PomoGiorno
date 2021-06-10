const Timer = {
    buttonStart: document.getElementById('starter'),
    buttonCancel: document.getElementById('finisher'),
    workingTimer(contador) {
        var startTimer;
        const btn = Timer.buttonStart;
        if (btn.classList.contains('start')) {
            btn.addEventListener('click', () => {
                startTimer = setInterval(() => {
                    contador.decreaseTime();
                    contador.setTime();
                    btn.setAttribute('disabled', 'true');
                    if (contador.time <= 0) {
                        clearInterval(startTimer);
                        btn.classList.remove('start');
                        btn.classList.add('interval');
                        App.reload();
                    }
                }, 1000);
                Timer.cancelTimer(startTimer);
            });
        }
    },
    cancelTimer(startTimer) {
        const btn = Timer.buttonCancel;
        const btnStart = Timer.buttonStart;
        btn.addEventListener('click', () => {
            clearInterval(startTimer);
            btnStart.removeAttribute('disabled');
            App.reload();
        });
    },
    breakTimer(contador) {
        var startTimer;
        const btn = Timer.buttonStart;
        if (btn.classList.contains('interval')) {
            contador.breakTime();
            btn.removeAttribute('disabled');
            btn.addEventListener('click', () => {
                startTimer = setInterval(() => {
                    contador.decreaseTime();
                    contador.setTime();
                    if (contador.time <= 0) {
                        clearInterval(startTimer);
                        btn.classList.remove('interval');
                        btn.classList.add('start');
                        App.reload();
                    }
                }, 1000);
                Timer.cancelTimer(startTimer);
            });
        }
    }
};
