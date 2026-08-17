import {useState} from 'react'

const TaskForm = () => {
  const [titulo, setTitulo] = useState("")
  const [desc, setDesc] = useState("")
  const [prioridade, setPrioridade] = useState("")
  const [status, setStatus] = useState("")
  
  return (
    <>
      <input type="name" value={titulo} onChange={e => setTitulo(e.target.value)}/>
      <input type="text" value={desc} onChange={e => setDesc(e.target.value)}/>
      <input type="text" value={prioridade} onChange={e => setPrioridade(e.target.value)}/>
      <input type="text" value={status} onChange={e => setStatus(e.target.value)}/>
      <button>Salvar Informações</button>
    </>
  )
}
export default TaskForm