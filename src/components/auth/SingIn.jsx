import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'


import './auth.css'

class SingIn extends Component {
    state = {
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
        console.log(this.state)
        this.props.signIn(this.state);
    }
   render() {
    const {authError} = this.props;
    return (
        <div className="container">
          {authError ? 
            <div className="alert alert-danger">
                {authError ? <p>{authError}</p> : null}
            </div>
           : null}
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                <div className="box">
                    <div className="shape1"></div>
                    <div className="shape2"></div>
                    <div className="shape3"></div>
                    <div className="shape4"></div>
                    <div className="shape5"></div>
                    <div className="shape6"></div>
                    <div className="shape7"></div>
                    <div className="float">
                        <form onSubmit={this.handleSubmit}  className="form">
                            <div className="form-group text-left">
                            <label className="text-white">Email:</label><br/>
                                <input type="text" name="email" id="email" onChange={this.handleChange} className="form-control"/>
                            </div>

                            <div className="form-group text-left">
                            <label className="text-white">Senha:</label><br/>
                                <input type="password" name="password" id="password" onChange={this.handleChange}  className="form-control"/>
                            </div>

                            <div className="form-group">
                                    <input type="submit" name="submit" className="btn btn-info btn-md" value="Entrar" />
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) =>{
    return{
        authError: state.auth.authError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingIn)
