
export class Activities {

    private _atividades = [];

    adiciona(atividade){
        this._atividades.push(atividade)
    }

    paraArray(){
        return this._atividades
    }
}