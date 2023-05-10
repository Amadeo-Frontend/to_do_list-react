"use strict";
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
var tarefas_1 = require("./reducers/tarefas");
var store = toolkit_1.configureStore({
    reducer: {
        tarefas: tarefas_1["default"]
    }
});
exports["default"] = store;
