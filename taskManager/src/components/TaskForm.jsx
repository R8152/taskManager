import {useState} from 'react'

export default function TaskForm({onSafe}){
  const [titulo, setTitulo] = useState("")
  const [desc, setDesc] = useState("")
  const [prioridade, setPrioridade] = useState("")
  const [status, setStatus] = useState("")
  // const [Titulos, setTitulos] = useState([]) // Além de remover, vamos usar essa estrutura para criar o taskList
  // const [Descs, setDescs] = useState([]) // Além de remover, vamos usar essa estrutura para criar o taskList
  // const [Prioridades, setPrioridades] = useState([]) // Além de remover, vamos usar essa estrutura para criar o taskList
  // const [situacoes, setSituacoes] = useState([]) // Além de remover, vamos usar essa estrutura para criar o taskList
  
  function handleSubmit(event){ //Função que será executada quando o formulário é enviado
    event.preventDefault() //Comando que evita que a página seja recarregada quando um formulário HTML é enviado

    const novaTask = {
      id: Date.now(), //id não possui useState, pois é gerado apenas quando uma tarefa é criada, ou seja, não precisa ser alterado
      titulo: titulo,
      descricao: desc,
      prioridade: prioridade,
      status: status
    }
    onSafe(novaTask) // Comando que pede para chamar uma função para entregar a tarefa (novaTask) e que faz isso por meio dos props para os componentes se comunicarem
  }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={titulo} placeholder='Título da tarefa' onChange={e => setTitulo(e.target.value)}/>
      {/* <input type="text" value={desc} placeholder='Descrição da tarefa' onChange={e => setDesc(e.target.value)}/> */}
      <textarea placeholder='Descrição da tarefa' value={desc} onChange={e => setDesc(e.target.value)}></textarea>
      <select value={prioridade} placeholder='Prioridade' onChange={e => setPrioridade(e.target.value)}>
        <option value="Baixa">Baixa</option>
        <option value="Média">Média</option>
        <option value="Alta">Alta</option>
      </select>
      {/* <input type="text" value={prioridade} placeholder='Prioridade' onChange={e => setPrioridade(e.target.value)}/> */}
      <select value={status} placeholder='Status da tarefa' onChange={e => setStatus(e.target.value)}>
        <option value="Pendente">Pendente</option>
        <option value="Em andamento">Em andamento</option>
        <option value="Concluída">Concluída</option>
      </select>
      {/* <input type="text" value={status} placeholder='Status da tarefa' onChange={e => setStatus(e.target.value)}/> */}
      <button type='submit'>Salvar Informações</button>
    </form>
    </>
  )
}