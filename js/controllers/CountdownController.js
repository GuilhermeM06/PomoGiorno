const Counter = {
    start(contador) {
        const initButton = document.getElementById('starter');
        initButton.addEventListener('click', () => {
            let count = 0;
            initButton.setAttribute('disabled', 'true');
            let timer = setInterval(() => {
                count++;
                contador.startCountdown();
                contador.setTimer();
            }, 1000);
            if (count == contador.time) {
                clearInterval(timer);
            }
        });
    },
    interval(contador) {
        if (contador.time == 0) {
            contador.startInterval();
        }
    }
};
