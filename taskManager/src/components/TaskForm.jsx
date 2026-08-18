import {useEffect, useState} from 'react'

const TaskForm = () => {
  const [titulo, setTitulo] = useState("")
  const [desc, setDesc] = useState("")
  const [prioridade, setPrioridade] = useState("")
  const [status, setStatus] = useState("")
  const [Titulos, setTitulos] = useState([])
  const [Descs, setDescs] = useState([])
  const [Prioridades, setPrioridades] = useState([])
  const [situacoes, setSituacoes] = useState([])
  function addTitulo(){
    setTitulos(
      [...Titulos, titulo]
    )
  }
  useEffect(()=>{
      console.log(titulo)
    }, [Titulos])
  
  function addDesc(){
    setDescs(
      [...Descs, desc]
    )
  }
  useEffect(()=>{
    console.log(desc)
  }, [Descs])

  function addPriori(){
    setPrioridades(
      [...Prioridades, prioridade]
    )
  }
  useEffect(()=>{
    console.log(prioridade)
  }, [Prioridades])

  function addStatus(){
    setSituacoes(
      [...situacoes, status]
    )
  }
  useEffect(()=>{
    console.log(status)
  }, [situacoes])
  return (
    <>
      <input type="name" value={titulo} placeholder='Título da tarefa' onChange={e => setTitulo(e.target.value)}/>
      <input type="text" value={desc} placeholder='Descrição da tarefa' onChange={e => setDesc(e.target.value)}/>
      <input type="text" value={prioridade} placeholder='Prioridade' onChange={e => setPrioridade(e.target.value)}/>
      <input type="text" value={status} placeholder='Status da tarefa' onChange={e => setStatus(e.target.value)}/>
      <button onClick={() => {addTitulo(); addDesc(); addPriori(); addStatus()}}>Salvar Informações</button>
    </>
  )
}
export default TaskForm