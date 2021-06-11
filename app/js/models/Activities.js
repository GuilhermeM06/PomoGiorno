System.register([], function (exports_1, context_1) {
    "use strict";
    var Activities;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Activities = class Activities {
                constructor() {
                    this._atividades = [];
                }
                adiciona(atividade) {
                    this._atividades.push(atividade);
                }
                paraArray() {
                    return this._atividades;
                }
            };
            exports_1("Activities", Activities);
        }
    };
});
