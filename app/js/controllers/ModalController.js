System.register(["../models/Activity", "../models/Activities"], function (exports_1, context_1) {
    "use strict";
    var Activity_1, Activities_1, ModalController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Activity_1_1) {
                Activity_1 = Activity_1_1;
            },
            function (Activities_1_1) {
                Activities_1 = Activities_1_1;
            }
        ],
        execute: function () {
            ModalController = class ModalController {
                constructor() {
                    this._atividades = new Activities_1.Activities();
                    this._inputDescricao = document.querySelector('#description');
                }
                open() {
                    const btnOpenModal = document.getElementById('adicionar');
                    btnOpenModal.addEventListener('click', () => {
                        document.querySelector('.modal-overlay').classList.add('active');
                    });
                }
                close() {
                    document.querySelector('.modal-overlay').classList.remove('active');
                }
                adiciona(event) {
                    event.preventDefault();
                    const atividade = new Activity_1.Activity(this._inputDescricao.value);
                    this._atividades.adiciona(atividade);
                    this._atividades.paraArray().forEach(atividade => {
                        document.getElementById('registered-activity').innerHTML = atividade.description;
                    });
                    this.close();
                }
                closeCancel() {
                    const btnCloseModal = document.getElementById('cancelar');
                    btnCloseModal.addEventListener('click', () => {
                        document.querySelector('.modal-overlay').classList.remove('active');
                    });
                }
            };
            exports_1("ModalController", ModalController);
        }
    };
});
