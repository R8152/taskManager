// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'

function App() {
  const [taskList, setTaskList] = useState([])

  return (
    <>
    <TaskForm setTasks={setTaskList}/>
    <ul>
      {taskList.map((task) => (
        <li key={task.id}>
          <strong>{task.titulo}</strong> - {task.descricao} ({task.prioridade} | {task.status})
        </li>
      ))}
    </ul>
    </>
  )
}

export default App
