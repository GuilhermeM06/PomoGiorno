import { Activity } from '../models/Activity';
import { Activities } from '../models/Activities'


export class ModalController {

    private _inputDescricao;
    private _atividades = new Activities();

    constructor(){
        this._inputDescricao = document.querySelector('#description')
       
    }

    open() {
        const btnOpenModal = document.getElementById('adicionar')
        btnOpenModal.addEventListener('click', () => {
            document.querySelector('.modal-overlay').classList.add('active')
        })
        
    }

    close() {
        document.querySelector('.modal-overlay').classList.remove('active')
    }

    adiciona(event){

        event.preventDefault()
        const atividade = new Activity(
            this._inputDescricao.value
        )

        this._atividades.adiciona(atividade)

        this._atividades.paraArray().forEach(atividade => {
            document.getElementById('registered-activity').innerHTML = atividade.description;
        })

        this.close()
    }

    closeCancel(){
        const btnCloseModal = document.getElementById('cancelar')
        btnCloseModal.addEventListener('click', () => {
            document.querySelector('.modal-overlay').classList.remove('active')
        })
    }

    

}