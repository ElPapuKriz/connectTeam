// pages/auth/Login.tsx
import { useState, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/pages/Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    console.log('Login:', { email, password })
    
    // Simular login exitoso
    navigate('/')
  }

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Logo */}
        <div className="login-logo">
          <img 
            src="/logo.svg" 
            alt="ConnectTeam Logo" 
            className="logo-image"
          />
          <h1 className="logo-text">
            <span className="logo-connect">Connect</span>
            <span className="logo-team">Team</span>
          </h1>
        </div>

        {/* Título */}
        <h2 className="login-title">Inicio sesión</h2>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="login-form">
          {/* Campo Email */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Ejemplo@empresa.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Campo Contraseña */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="form-input"
                placeholder="············"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Mostrar contraseña"
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          {/* Botón Entrar */}
          <button type="submit" className="btn-entrar">
            Entrar
          </button>

          {/* Link recuperar contraseña */}
          <Link to="/forgot-password" className="link-forgot-password">
            ¿Olvidaste tu contraseña?
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login