"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var BarraLateral_1 = require("./containers/BarraLateral");
var ListaDeTarefas_1 = require("./containers/ListaDeTarefas");
var styles_1 = require("./styles/styles");
var store_1 = require("./store");
function App() {
    return (React.createElement(react_redux_1.Provider, { store: store_1["default"] },
        React.createElement(styles_1["default"], null),
        React.createElement(styles_1.Container, null,
            React.createElement(BarraLateral_1["default"], null),
            React.createElement(ListaDeTarefas_1["default"], null))));
}
exports["default"] = App;
