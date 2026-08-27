// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'

function App() {
  //useState gerencia o estado central ou global da lista de tarefas
  //Carrega as tarefas gravadas no navegador. Se não houver nada salvo, define o estado como um array vazio []
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  return (
    <>
    
    </>
  )
}

export default App
