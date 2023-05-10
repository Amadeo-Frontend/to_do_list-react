"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.BotaoCancelarRemover = exports.BotaoSalvar = exports.Botao = exports.BarraAcoes = exports.Descricao = exports.Tag = exports.Titulo = exports.Card = void 0;
var enums = require("../../utils/enums/Tarefa");
var styled_components_1 = require("styled-components");
var variaveis_1 = require("../../styles/variaveis");
function retornaCorDeFundo(props) {
    if (props.parametro === 'prioridade') {
        if (props.prioridade === enums.Prioridade.URGENTE)
            return variaveis_1["default"].vermelho;
        if (props.prioridade === enums.Prioridade.IMPORTANTE)
            return variaveis_1["default"].amarelo2;
    }
    else {
        if (props.status === enums.Status.PENDENTE)
            return variaveis_1["default"].amarelo;
        if (props.status === enums.Status.CONCLUIDA)
            return variaveis_1["default"].verde;
    }
    return '#ccc';
}
exports.Card = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #fcfcfc;\n  border-radius: 16px;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n  padding: 16px;\n  margin-bottom: 32px;\n"], ["\n  background-color: #fcfcfc;\n  border-radius: 16px;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n  padding: 16px;\n  margin-bottom: 32px;\n"])));
exports.Titulo = styled_components_1["default"].h3(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 16px;\n"], ["\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 16px;\n"])));
exports.Tag = styled_components_1["default"].span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: #fff;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 4px 8px;\n  border-radius: 8px;\n  background-color: ", ";\n  margin-right: 16px;\n  display: inline-block;\n"], ["\n  color: #fff;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 4px 8px;\n  border-radius: 8px;\n  background-color: ", ";\n  margin-right: 16px;\n  display: inline-block;\n"])), function (props) { return retornaCorDeFundo(props); });
exports.Descricao = styled_components_1["default"].textarea(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: #8b8b8b;\n  font-size: 14px;\n  line-height: 24px;\n  font-family: 'Roboto Mono', monospace;\n  border: none;\n  width: 100%;\n  resize: none;\n  display: block;\n  margin-top: 16px;\n  background-color: transparent;\n"], ["\n  color: #8b8b8b;\n  font-size: 14px;\n  line-height: 24px;\n  font-family: 'Roboto Mono', monospace;\n  border: none;\n  width: 100%;\n  resize: none;\n  display: block;\n  margin-top: 16px;\n  background-color: transparent;\n"])));
exports.BarraAcoes = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding-top: 16px;\n"], ["\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding-top: 16px;\n"])));
exports.Botao = styled_components_1["default"].button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background-color: #2f3640;\n  border: none;\n  border-radius: 8px;\n  color: #fff;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 8px 12px;\n  margin-right: 8px;\n  cursor: pointer;\n"], ["\n  background-color: #2f3640;\n  border: none;\n  border-radius: 8px;\n  color: #fff;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 8px 12px;\n  margin-right: 8px;\n  cursor: pointer;\n"])));
exports.BotaoSalvar = styled_components_1["default"](exports.Botao)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"])), variaveis_1["default"].verde);
exports.BotaoCancelarRemover = styled_components_1["default"](exports.Botao)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"])), variaveis_1["default"].vermelho);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
