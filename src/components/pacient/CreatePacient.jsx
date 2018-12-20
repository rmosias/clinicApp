import React from 'react'

//css estilizar component
import './pacient.css';

const CreatePacient = () => {
  return (
    <div className="container-fluid ">
        <div className="card">
            <h5 className="text-left card-header">Cadastro de pacientes</h5>
              <div className="text-left  card-body">
                  <a href="#" className="btn btn-primary">Cadastrar</a>
              </div>
        </div>
    </div>
  )
}

export default CreatePacient
