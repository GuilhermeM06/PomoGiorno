const Counter = {
    start(contador) {
        const initButton = document.getElementById('starter');
        initButton.addEventListener('click', () => {
            let timer = setInterval(() => {
                initButton.setAttribute('disabled', 'true');
                contador.startCountdown();
                contador.setTimer();
                console.log(contador.time);
                if (contador.time == 0) {
                    clearInterval(timer);
                }
            }, 1000);
        });
    }
};
