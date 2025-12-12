import { Link } from "react-router";

import '../../styles/pages/Register.css';

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-left">
        <div className="logo-container">
          <div className="logo-icon">
            <div className="chat-bubble blue"></div>
            <div className="chat-bubble green"></div>
            <div className="arrows">
              <div className="arrow arrow-top"></div>
              <div className="arrow arrow-bottom"></div>
            </div>
          </div>
          <h1 className="logo-text">
            <span className="logo-connect">Connect</span>
            <span className="logo-team">Team</span>
          </h1>
        </div>
        
        <button className="register-button">Registrar</button>
        <Link to={'/login'} className="login-link" >Iniciar sesión</Link>
      </div>

      <div className="register-right">
        <h2 className="form-title">Crear Cuenta Nueva</h2>
        
        <form className="register-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              placeholder="Tu nombre completo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cargo">Cargo</label>
            <select id="cargo" name="cargo">
              <option value="produccion">Producción</option>
              <option value="administracion">Administración</option>
              <option value="contabilidad">Contabilidad</option>
              <option value="logistica">Logística</option>
              <option value="recursos-humanos">Recursos humanos</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo institucional</label>
            <input 
              type="email" 
              id="correo" 
              name="correo" 
              placeholder="ejemplo@empresa.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contrasena">Contraseña</label>
            <input 
              type="password" 
              id="contrasena" 
              name="contrasena" 
              placeholder="············"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;