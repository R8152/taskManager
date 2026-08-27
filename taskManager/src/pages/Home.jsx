import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Task Manager</h1>
      <p>
        Aplicação simples para gerenciamento e controle de tarefas internas.
        Cadastre, filtre e acompanhe o progresso das suas atividades.
      </p>
      <Link to="/tasks">
        <button type="button">Acessar lista de tarefas</button>
      </Link>
    </>
  )
}
