import React, { Component } from 'react'

import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SingUp extends Component {
  state = {
    name: '',
    email: '',
    password: ''

  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 py-5 bg-primary text-white text-center ">
            <div className=" ">
              <div className="card-body">
                <img src="http://www.ansonika.com/mavia/img/registration_bg.svg" />
                <h2 className="py-3">Cadastre-se</h2>
                <p>Tão importante quanto à realização do exame é a sua documentação, pois o produto final que ratifica a qualidade do exame é a sua documentação.</p>
              </div>
            </div>
          </div>
          <div className="col-md-8 py-5 border">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input id="name" name="name" placeholder="Nome completo" className="form-control" type="text" onChange={this.handleChange}/>
                </div>
                <div className="form-group col-md-6">
                  <input type="email" className="form-control" id="email" placeholder="Email" onChange={this.handleChange}/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input type="password" id="password" name="password" placeholder="Senha" className="form-control" required="required" onChange={this.handleChange}/>
                </div>
                </div>
              <div className="form-row">
                <button type="submit" className="btn btn-danger">Cadastrar</button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingUp)
