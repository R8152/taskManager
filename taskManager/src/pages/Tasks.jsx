import React, { useEffect, useState } from 'react'

export default function Tasks() {
  //Atualização automática de dados gravados anteriormente toda vez que a lista for alterada
    const [tasks, setTasks] = useState(() =>{
      const savedTasks = localStorage.getItem("tasks")
      return savedTasks ? JSON.parse(savedTasks) : []
    })
    const [filtroStatus, setfiltroStatus] = useState("Todas") //Armazena a opção de filtragem selecionada pelo usuário na tela
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks)) //useEffect para salvar as tarefas no localStorage sempre que a lista mudar
    }, [tasks])
  return (
    <>
      
    </>
  )
}
