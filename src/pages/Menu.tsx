// components/Menu.tsx
import { Link } from 'react-router-dom'
import '../styles/pages/Menu.css'

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-content">
        {/* Logo */}
        <div className="menu-logo">
          <img 
            src="/logo.jpg" 
            alt="ConnectTeam Logo" 
            className="logo-image"
          />
          <h1 className="logo-text">
            <span className="logo-connect">Connect</span>
            <span className="logo-team">Team</span>
          </h1>
        </div>

        {/* Título principal */}
        <h2 className="menu-title">Sistema de Comunicación Interna</h2>

        {/* Subtítulo */}
        <p className="menu-subtitle">Conecta. Informa. Colabora.</p>

        {/* Botones */}
        <div className="menu-buttons">
          <Link to="/login" className="btn btn-primary">
            Iniciar Sesión
          </Link>
          <Link to="/register" className="btn btn-secondary">
            Crear Cuenta
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Menu