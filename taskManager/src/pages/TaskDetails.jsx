import { Link, useNavigate, useParams } from 'react-router-dom'

export default function TaskDetails({tasks}) {
  const {id} = useParams() //hook que retorna um objeto com valores extraídos do endereço web
  const navigate = useNavigate()
  //Buscando das props 'tasks' ou direto de localStorage
  //Não se deve utilizar useState ou useEffect para calcular, derivar ou buscar um dado por meio de props ou estados existentes
  let currentTasks = tasks
  if(!currentTasks || currentTasks.length === 0){
    const savedTasks = localStorage.getItem('tasks')
    currentTasks = savedTasks ? JSON.parse(savedTasks) : []
  }
  const task = currentTasks.find(item => String(item.id) === String(id))
  if (!task){
    return(
      <div>
        <h2>Tarefa não encontrada</h2>
        <p>A tarefa não existe ou foi removida</p>
        <button type="button" onClick={() => navigate('/tasks')}>Voltar para a lista</button>
      </div>
      )
    }
  return (
    <>
    <h1>Detalhes da tarefa</h1>
    <div>
      <h2>{task.titulo}</h2>
      <p><strong>Descrição</strong>: {task.descricao}</p>
      <p><strong>Prioridade</strong>: {task.prioridade}</p>
      <p><strong>Status</strong>: {task.status}</p>
      <p>ID da tarefa: {task.id}</p>
    </div>
    <br />
    <Link to="/tasks">← Voltar para a listagem</Link>
    </>
  )
}
