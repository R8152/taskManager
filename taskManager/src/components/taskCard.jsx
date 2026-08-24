import './taskCard.css'
// import { useEffect, useState} from 'react'
// import TaskForm from './TaskForm'

// import React from 'react'
import { Link } from 'react-router-dom'

export default function TaskCard({task:{id, titulo, descricao, prioridade, status}, onDelete}) {
  return (
    <>
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <p>{prioridade}</p>
      <p>{status}</p>
      <Link to={`/tasks/${id}`}>Ver Detalhes</Link>
      <button onClick={() => onDelete({id, titulo, descricao, prioridade, status})}>
        Excluir
      </button>
    </>
  )
}