"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var Tarefas_1 = require("../../components/Tarefas");
var styles_1 = require("./styles");
var ListaDeTarefas = function () {
    var tarefas = react_redux_1.useSelector(function (state) { return state; }).tarefas;
    return (React.createElement(styles_1.Container, null,
        React.createElement("p", null, "2 tarefas marcadas como: \"categotia\u201C e \"termo\u201C"),
        React.createElement("ul", null, tarefas.map(function (t) { return (React.createElement("li", { key: t.titulo },
            React.createElement(Tarefas_1["default"], { descricao: t.descricao, titulo: t.titulo, status: t.status, prioridade: t.prioridade }))); }))));
};
exports["default"] = ListaDeTarefas;
