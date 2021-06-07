const App = {
    init() {
        const contador = new Countdown(10);
        contador.setTimer();
        Counter.start(contador);
    },
    reload() {
        App.init();
    }
};
App.init();
