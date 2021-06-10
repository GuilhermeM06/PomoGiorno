const Store = {
    get(){
        return JSON.parse(localStorage.getItem("pomodiorno:activities")) || []
    },
    set(_atividades){
        localStorage.setItem("pomodiorno:activities", JSON.stringify(_atividades))
    }
}


class Activities {

    private _atividades = [];
    private _storage = Store;

    adiciona(atividade){
        this._atividades.push(atividade)
    }

    paraArray(){
        return this._atividades
    }

    setActivities(){
        this._storage.set(this._atividades)
    }
}