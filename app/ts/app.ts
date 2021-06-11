import { Timer } from './models/Timer';
import { ModalController } from './controllers/ModalController';


const App = {

    init(){
        const modalController = new ModalController
        const timer = new Timer(1500);
        timer.timer()
        modalController.open()
        modalController.closeCancel()
        document.querySelector('.form').addEventListener('submit', modalController.adiciona.bind(modalController))  
    },

    reload(){
        App.init()
    }
}

App.init()


