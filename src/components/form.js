import React, {Fragment} from 'react'
import LogoSite from './logo'
import "./form.css"

function FormSite(){
  return (
    <Fragment>
      <section className="sessao-wrapper">
      <form className="form-site">
        <LogoSite/>

        <h1 className="title-form">Entrar</h1>

        <div className="inputs-wrapper">
          <input 
           placeholder="Informe seu email ou número de telefone"
           className="text" 
           type="text">
             
          </input>
         
        </div>

        <div className="inputs-wrapper">
          <input
          placeholder="Informe sua Senha" 
          className="password" 
          type="password">
          </input>

        </div>

        <div className="inputs-wrapper btns-form">
          <button className="btn-entrar">Entrar</button>
          <button className="btn-cadastro">Cadastrar</button>
        </div>

      </form>
      </section>
    </Fragment>
  )
}

export default FormSite;