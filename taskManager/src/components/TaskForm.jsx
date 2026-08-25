import {useState} from 'react'

export default function TaskForm({setTasks={setTasks}}){
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [prioridade, setPrioridade] = useState("Baixa")
  const [status, setStatus] = useState("Pendente")
  // const [Titulos, setTitulos] = useState([]) // Além de remover, vamos usar essa estrutura para criar o taskList
  // const [Descs, setDescs] = useState([]) // Além de remover, vamos usar essa estrutura para criar o taskList
  // const [Prioridades, setPrioridades] = useState([]) // Além de remover, vamos usar essa estrutura para criar o taskList
  // const [situacoes, setSituacoes] = useState([]) // Além de remover, vamos usar essa estrutura para criar o taskList
  
  function handleSubmit(event){ //Função que será executada quando o formulário é enviado
    event.preventDefault() //Comando que evita que a página seja recarregada quando um formulário HTML é enviado
    //Os envios de textos vão ser evitados caso tiver espaços em branco
    if (!titulo.trim() || !descricao.trim()) return 

    const novaTask = {
      id: Date.now(), //id não possui useState, pois é gerado apenas quando uma tarefa é criada, ou seja, não precisa ser alterado
      titulo,
      descricao,
      prioridade,
      status
    }
    setTasks(prevTasks => [...prevTasks, novaTask]) //Formato que adiciona um novo objeto à lista sem perder tarefas cadastradas anteriormente
  }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={titulo} placeholder='Título da tarefa' onChange={e => setTitulo(e.target.value)}/>
      <textarea placeholder='Descrição da tarefa' value={descricao} onChange={e => setDescricao(e.target.value)}></textarea>
      <select value={prioridade} placeholder='Prioridade' onChange={e => setPrioridade(e.target.value)}>
        <option value="Baixa">Baixa</option>
        <option value="Média">Média</option>
        <option value="Alta">Alta</option>
      </select>
      <select value={status} placeholder='Status da tarefa' onChange={e => setStatus(e.target.value)}>
        <option value="Pendente">Pendente</option>
        <option value="Em andamento">Em andamento</option>
        <option value="Concluída">Concluída</option>
      </select>
      <button type='submit'>Salvar Informações</button>
    </form>
    </>
  )
}