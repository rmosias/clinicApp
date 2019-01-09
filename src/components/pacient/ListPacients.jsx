import React, { Component } from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import './pacient.css'


class ListPacients extends Component {
  renderRows() {
    const { pacients } = this.props
    console.log(pacients)
    return pacients.map(pacient => (
      <tr key={pacient.id}>
        <th scope="row">{pacient.pacient_id}</th>
        <td>{pacient.name}</td>
        <td>17/12/2018</td>
        <td><span className="status text-success">•</span></td>
        <td>
          <a href="#">
            <i className="fas fa-edit"></i>
          </a>
          <br/>
          <a href="#">
            <i className="fas fa-trash"></i>
          </a>
        </td>
      </tr>
    ))
  }
  render() {
    return(
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
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {    
  return{
    pacients: state.firestore.ordered.pacient || []
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      {collection: 'pacient'}
  ])
)(ListPacients)

