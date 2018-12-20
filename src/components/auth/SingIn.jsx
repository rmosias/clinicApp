import React from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'


import './auth.css'

const SingIn = () => {
  return (
    <div className="container">
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
                    <form className="form">
                        <div className="form-group text-left">
                           <label className="text-white">Email:</label><br/>
                            <input type="text" name="username" id="username" className="form-control"/>
                        </div>

                        <div className="form-group text-left">
                           <label className="text-white">Senha:</label><br/>
                            <input type="password" name="password" id="password" className="form-control"/>
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

export default SingIn
