// import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'

function App() {
  const taskList = [
    {
      id: "",
      title: "Limpar a caixa dos gatos",
      descricao: "Limpar com uma pá e um saco de plástico",
      prioridade: "Média",
      situacao: "Concluída"
    },
  ] // Utilizar useState ao invés de variáveis

  return (
    <div>
      {taskList((task) => {
          return <TaskForm titulo={task.title} desc={task.descricao} prioridade={task.prioridade} situacao={task.situacao}/> // Formulario fora do map //Passar states pro formulario
        })}
      
    </div>
  )
}

export default App
