import { Link, useNavigate } from 'react-router-dom'
import TaskForm from '../components/TaskForm'

export default function NewTask({setTasks}) {
  const navigate = useNavigate() //hook que permite mudar de página por meio de um componente funcional, como depois de enviar um formulário ou apertar um botão
  const handleAddTask = (novaTask) => {
    if (setTasks){
      setTasks(prevTasks => [...prevTasks, novaTask])
    } else{
      const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
      const updatedTasks = [...savedTasks, novaTask]
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    }

    navigate('/tasks')
  }
  return (
    <>
      <h1>Cadastrar nova Tarefa</h1>
      <p>
        <Link to={'/tasks'}>← Voltar para a lista de tarefas</Link>
      </p>
    </>
  )
}
