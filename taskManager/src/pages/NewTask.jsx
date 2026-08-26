import React from 'react'
import { useNavigate } from 'react-router-dom'

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
      
    </>
  )
}
