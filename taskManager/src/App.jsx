// import { useState } from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'

function App() {
  //useState gerencia o estado central ou global da lista de tarefas
  //Carrega as tarefas gravadas no navegador. Se não houver nada salvo, define o estado como um array vazio []
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })
  //useEffect sincroniza o App com o localStorage
  //Sempre que tasks sofre alguma alteração, o useEffect e a função passada para este são executados automaticamente
  //Pega o array atualizado de tasks, converte para texto com JSON.stringify e salva no localStorage do navegador
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  return (
    <>
    
    </>
  )
}

export default App
