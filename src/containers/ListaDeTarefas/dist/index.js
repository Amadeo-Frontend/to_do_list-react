"use strict";
exports.__esModule = true;
var Tarefas_1 = require("../../components/Tarefas");
var styles_1 = require("./styles");
var enums = require("../../utils/enuns/Tarefa");
var tarefas = [
    {
        titulo: 'Estudar React',
        descricao: 'Ver módulo 30',
        status: enums.Status.PENDENTE,
        prioridade: enums.Prioridade.IMPORTANTE
    },
    {
        titulo: 'Ir ao mercado',
        descricao: 'após o meio dia',
        status: enums.Status.PENDENTE,
        prioridade: enums.Prioridade.URGENTE
    },
    {
        titulo: 'Pagar conta da internet',
        descricao: 'Pagar a conta no cartão do BB',
        status: enums.Status.CONCLUIDA,
        prioridade: enums.Prioridade.IMPORTANTE
    }
];
var ListaDeTarefas = function () { return (React.createElement(styles_1.Container, null,
    React.createElement("p", null, "2 tarefas marcadas como: \"categotia\u201C e \"termo\u201C"),
    React.createElement("ul", null, tarefas.map(function (t) { return (React.createElement("li", { key: t.titulo },
        React.createElement(Tarefas_1["default"], { descricao: t.descricao, titulo: t.titulo, status: t.status, prioridade: t.prioridade }))); })))); };
exports["default"] = ListaDeTarefas;
