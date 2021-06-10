const Modal = {
    open() {
        document.querySelector('.modal-overlay').classList.add('active');
    },
    close() {
        document.querySelector('.modal-overlay').classList.remove('active');
    }
};
class ModalController {
    constructor() {
        this._atividades = new Activities();
        this._inputDescricao = document.querySelector('#description');
    }
    adiciona(event) {
        event.preventDefault();
        const atividade = new Activity(this._inputDescricao.value);
        this._atividades.adiciona(atividade);
        this._atividades.paraArray().forEach(atividade => {
            document.getElementById('registered-activity').innerHTML = atividade.description;
        });
        Modal.close();
    }
}
