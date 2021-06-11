System.register(["./models/Timer", "./controllers/ModalController"], function (exports_1, context_1) {
    "use strict";
    var Timer_1, ModalController_1, App;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Timer_1_1) {
                Timer_1 = Timer_1_1;
            },
            function (ModalController_1_1) {
                ModalController_1 = ModalController_1_1;
            }
        ],
        execute: function () {
            App = {
                init() {
                    const modalController = new ModalController_1.ModalController;
                    const timer = new Timer_1.Timer(1500);
                    timer.timer();
                    modalController.open();
                    modalController.closeCancel();
                    document.querySelector('.form').addEventListener('submit', modalController.adiciona.bind(modalController));
                },
                reload() {
                    App.init();
                }
            };
            App.init();
        }
    };
});
