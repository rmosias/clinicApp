import React from 'react'
import ContentPacient from './ContentPacient';
import './pacient.css'

const ListPacients = () => {
  return (
    <div className="container">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Data criação</th>
            <th scope="col">Status</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <ContentPacient />
        </tbody>
      </table>
    </div>
  )
}

export default ListPacients
