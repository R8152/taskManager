import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function TaskDetails({tasks}) {
  const {id} = useParams() //hook que retorna um objeto com valores extraídos do endereço web
    const navigate = useNavigate()
    const [task, setTask] = useState(null)
    useEffect(() => {
      //Buscando das props 'tasks' ou direto de localStorage
      let currentTasks = tasks
      if(!currentTasks || currentTasks.length === 0){
        const savedTasks = localStorage.getItem('tasks')
        currentTasks = savedTasks ? JSON.parse(savedTasks) : []
      }

      const foundTask = currentTasks.find(item => String(item.id) === String(id))

      if (foundTask){
        setTask(foundTask)
      }
    }, [id, tasks])
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
    
    </>
  )
}
