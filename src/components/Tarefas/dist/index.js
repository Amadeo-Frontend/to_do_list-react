"use strict";
exports.__esModule = true;
var react_1 = require("react");
var S = require("./styles");
var Tarefa = function (_a) {
    var descricao = _a.descricao, prioridade = _a.prioridade, status = _a.status, titulo = _a.titulo;
    var _b = react_1.useState(false), estaEditando = _b[0], setEstaEditando = _b[1];
    return (React.createElement(S.Card, null,
        React.createElement(S.Titulo, null, titulo),
        React.createElement(S.Tag, { parametro: "prioridade", prioridade: prioridade }, prioridade),
        React.createElement(S.Tag, { parametro: "status", status: status }, status),
        React.createElement(S.Descricao, { value: descricao }),
        React.createElement(S.BarraAcoes, null, estaEditando ? (React.createElement(React.Fragment, null,
            React.createElement(S.BotaoSalvar, null, "Salvar"),
            React.createElement(S.BotaoCancelarRemover, { onClick: function () { return setEstaEditando(false); } }, "Cancelar"))) : (React.createElement(React.Fragment, null,
            React.createElement(S.Botao, { onClick: function () { return setEstaEditando(true); } }, "Editar"),
            React.createElement(S.BotaoCancelarRemover, null, "Remover"))))));
};
exports["default"] = Tarefa;
