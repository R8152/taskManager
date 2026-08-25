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
  ]) // Utilizar useState ao invés de variáveis

  return (
    <>
      return <TaskForm titulo={taskList.title} desc={taskList.descricao} prioridade={taskList.prioridade} situacao={taskList.situacao}/>
    </>
  )
}

export default App
