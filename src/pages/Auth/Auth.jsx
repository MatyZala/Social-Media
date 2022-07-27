import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <Link to='/'><img src={Logo} alt="" /></Link>
        <div className="Webname">
          <h1>Vanguardia</h1>
          <h6>Explorar un mundo lleno de ideas</h6>
        </div>
      </div>

      <LogIn/>
    </div>
  );
};
function LogIn() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Iniciar sesión</h3>
  
          <div>
            <input
              type="text"
              placeholder="Nombre de usuario"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Contraseña"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                No tienes cuenta? Registrate!
              </span>
            <button className="button infoButton">Iniciar sesión</button>
          </div>
        </form>
      </div>
    );
  }
function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Registrarse</h3>

        <div>
          <input
            type="text"
            placeholder="Nombre"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Apellido"
            className="infoInput"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Nombre de usuario"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Contraseña"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirmar contraseña"
          />
        </div>

        <div>
            <span style={{fontSize: '12px'}}>Ya tienes cuenta? Inicia sesión!</span>
        </div>
        <button className="button infoButton" type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Auth;
