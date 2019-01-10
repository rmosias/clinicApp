import React from 'react'

const SingUp = () => {
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
          <form >
            <div className="form-row">
              <div className="form-group col-md-6">
                <input id="nome" name="nome" placeholder="Nome completo" className="form-control" type="text"/>
              </div>
              <div className="form-group col-md-6">
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <input id="celular" name="celular" placeholder="Celular" className="form-control" required="required" type="text" />
                        </div>
              <div className="form-group col-md-6">

                <select id="inputState" className="form-control">
                    <option selected>Profissão ...</option>
                    <option> Atendente</option>
                    <option> Médico</option>
                    <option> Gerente Financeiro</option>
                  </select>
                </div>
              </div>
            <div className="form-row">
              <button type="button" className="btn btn-danger">Cadastrar</button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  )
}

export default SingUp