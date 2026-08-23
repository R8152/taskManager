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
    }, // Faltou um ID (Identificador único)
  ] // Utilizar useState ao invés de variáveis

  return (
    <div>
      {taskList.map((task) => {
          return <TaskForm titulo={task.title} desc={task.descricao} prioridade={task.priori} situacao={task.situacao}/> // Formulario fora do map //Passar states pro formulario
        })}
      
    </div>
  )
}

export default App

//precisavamos do taskCard dentro do maps 
