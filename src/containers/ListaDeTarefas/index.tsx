import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefas'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categotia&ldquo; e &quot;termo&ldquo;
      </p>
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
}

export default ListaDeTarefas
