// import { useState } from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import NewTask from './pages/NewTask'
import TaskDetails from './pages/TaskDetails'

export default function App() {
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
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/tasks">Tarefas</Link> | <Link to="/tasks/new">Nova Tarefa</Link>
        </nav>
      </header>
      <hr />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tasks" element={<Tasks tasks={tasks} setTasks={setTasks}/>}/>
          <Route path="/tasks/new" element={<NewTask setTasks={setTasks}/>}/>
          <Route path="/tasks/:id" element={<TaskDetails tasks={tasks}/>}/>
        </Routes>
      </main>
    </BrowserRouter>
    </>
  )
}