import { useState } from 'react'
import TaskForm from '../components/TaskForm'
import TaskCard from '../components/TaskCard'

const tarefasIniciais = []
export default function Tasks() {
  //Atualização automática de dados gravados anteriormente toda vez que a lista for alterada
    const [tasks, setTasks] = useState(tarefasIniciais)
    const [filtroStatus, setfiltroStatus] = useState("Todas") //Armazena a opção de filtragem selecionada pelo usuário na tela ou controla o filtro por status
    const handleDelete = (id) => {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
    }
    const tarefasFiltradas = tasks.filter(task => { //Aplicação do filtro de status por meio do filter()
      if(filtroStatus === 'Todas') return true
      return task.status === filtroStatus
    })
  return (
    <>
      <h1>Gerenciador de Tarefas</h1>
      <section>
        <h2>Cadastrar Nova Tarefa</h2>
        <TaskForm setTasks={setTasks}/>
      </section>
      <hr/>
      {/* Filtro por Status */}
      <section>
        <label htmlFor="filtro">Filtrar por Status:</label>
        <select id="filtro" value={filtroStatus} onChange={(e) => setfiltroStatus(e.target.value)}>
        <option value="Todas">Todas</option>
        <option value="Pendente">Pendentes</option>
        <option value="Em andamento">Em andamento</option>
        <option value="Concluída">Concluída</option></select>
      </section>
      {/* Renderização da lista com map() */}
      <section>
        <h2>Lista de Tarefas ({tarefasFiltradas.length})</h2>
        {tarefasFiltradas.length === 0 ? (
          <p>Nenhuma tarefa encontrada</p>
        ): (
          tarefasFiltradas.map((task) => {
            <TaskCard key={task.id} task={task} onDelete={handleDelete}/>
          })
        )}
      </section>
    </>
  )
}
