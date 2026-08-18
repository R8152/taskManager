// import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'

function App() {
  const taskList = [
    {
      title: "Limpar a caixa dos gatos",
      descricao: "Limpar com uma pá e um saco de plástico",
      priori: "Média",
      situacao: "Concluída"
    }

  ]

  return (
    <div>
      {taskList.map((task) => {
        console.log(<TaskForm titulo={task.title}/>)
        console.log(<TaskForm desc={task.descricao}/>)
        console.log(<TaskForm prioridade={task.priori}/>)
        console.log(<TaskForm status={task.situacao}/>)
          return <TaskForm titulo={task.title}/>
        })}
      
    </div>
  )
}

export default App
