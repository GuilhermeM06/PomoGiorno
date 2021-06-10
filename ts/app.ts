const App = {

    init(){
        const modalController = new ModalController
        document.querySelector('.form').addEventListener('submit', modalController.adiciona.bind(modalController))
        
    },

    reload(){
        App.init()
    }
}

App.init()


