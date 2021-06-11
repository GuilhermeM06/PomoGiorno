class Activities {
    constructor() {
        this._atividades = [];
    }
    adiciona(atividade) {
        this._atividades.push(atividade);
    }
    paraArray() {
        return this._atividades;
    }
}
