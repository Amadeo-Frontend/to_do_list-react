import Tarefa from '../../components/Tarefas'
import { Container } from './styles'
import * as enums from '../../utils/enuns/Tarefa'

const tarefas = [
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
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categotia&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
