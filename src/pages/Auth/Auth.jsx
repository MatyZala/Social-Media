import React from 'react'
import Logo from '../../img/logo.png'
import './Auth.css'

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>Vanguardia</h1>
                <h6>Explorar red social</h6>
            </div>
        </div>
        
        <LogIn/>
    </div>
  )
}

function LogIn() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
            <span style={{ fontSize: "12px" }}>
              Don't have an account Sign up
            </span>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}
function SignUp()  {

      return(
        <div className="a-right">
          <form className="infoForm authForm">


            <h3>Registrate</h3>

            <div>
              <input 
              type="text"
              placeholder='Nombre'
              className='infoInput'
              name='firstname'
              />
              <input 
              type="text" 
              placeholder='Apellido'
              className='infoInput' 
              name='lastname'
              />
            </div>

            <div>
              <input 
              type="text" 
              className="infoInput" 
              name='username' 
              placeholder='Nombre de usuario'
              />
            </div>

            <div>
              <input 
              type="text" 
              className="infoInput" 
              name='password'
              placeholder='Contraseña'
              />
              <input 
              type="text" 
              className="infoInput" 
              name='confirmpass'
              placeholder='Confirmar contraseña'
              />
            </div>

            <div>
              <span style={{fontSize: '12px'}}>Ya tienes una cuenta? Inicia sesión!</span>
            </div>

            <button className="button infoButton" type='submit'>Registrarse</button>
          </form>
        </div>
      )

}

export default Auth