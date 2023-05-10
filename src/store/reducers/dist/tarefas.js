"use strict";
exports.__esModule = true;
exports.remover = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var Tarefa_1 = require("../../models/Tarefa");
var enums = require("../../utils/enums/Tarefa");
var tarefasSlice = toolkit_1.createSlice({
    name: 'tarefas',
    initialState: [
        new Tarefa_1["default"]('Estudar JavaScript', enums.Prioridade.IMPORTANTE, enums.Status.PENDENTE, 'Ler sobre orientação a objetos', 1),
        new Tarefa_1["default"]('Estudar TypeScript', enums.Prioridade.URGENTE, enums.Status.CONCLUIDA, 'Rever módulo 2', 2),
        new Tarefa_1["default"]('Estudar React', enums.Prioridade.IMPORTANTE, enums.Status.PENDENTE, 'Praticar o useEffect', 3)
    ],
    reducers: {
        remover: function (state, action) {
            state = state.filter(function (tarefa) { return tarefa.id !== action.payload; });
        }
    }
});
exports.remover = tarefasSlice.actions.remover;
exports["default"] = tarefasSlice.reducer;
