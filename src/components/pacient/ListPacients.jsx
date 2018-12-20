import React, { Component } from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import './pacient.css'

class ListPacients extends Component {
  render() {
    const {pacients} = this.props;
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
            {pacients && pacients.map(pacient => {
              return(
                <tr key={pacient.id}>
                  <th scope="row">{pacient.pacient_id}</th>
                    <td>{pacient.name}</td>
                    <td>17/12/2018</td>
                    {(pacients.status = true) ? <td><span className="status text-success">•</span></td> : <td><span className="text-danger">x</span></td>}
                    <td>
                        <a href="#" className="settings" title="" data-toggle="tooltip" data-original-title="Settings"><i className="material-icons"></i></a>
                        <a href="#" className="delete" title="" data-toggle="tooltip" data-original-title="Delete"><i className="material-icons"></i></a>
                    </td>
                </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {    
  return{
    pacients: state.firestore.ordered.pacient
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      {collection: 'pacient'}
  ])
)(ListPacients)

