// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'

function App() {
  const [taskList, setTaskList] = useState([
    {
      id: "",
      title: "Limpar a caixa dos gatos",
      descricao: "Limpar com uma pá e um saco de plástico",
      prioridade: "Média",
      situacao: "Concluída"
    },
  ])

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
