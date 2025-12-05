import './../styles/pages/Perfil.css'

const Perfil = () => {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1 className="profile-title">Mi Perfil</h1>
        <p className="profile-subtitle">Información personal</p>
      </header>

      <div className="profile-card">
        <div className="avatar-section">
          <div className="avatar">
            <span className="avatar-letter">U</span>
          </div>
          <p className="avatar-name">Usuario Demo</p>
        </div>

        <div className="info-section">
          <div className="info-item">
            <div className="info-label">
              <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Nombre completo</span>
            </div>
            <p className="info-value">Usuario Demo</p>
          </div>

          <div className="info-item">
            <div className="info-label">
              <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Cargo</span>
            </div>
            <p className="info-value">Producción</p>
          </div>

          <div className="info-item">
            <div className="info-label">
              <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Correo institucional</span>
            </div>
            <p className="info-value">a@a</p>
          </div>
        </div>

        <button className="btn-edit">
          <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Editar Perfil
        </button>

        <button className="btn-logout">
          <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Cerrar Sesión
        </button>
      </div>

      <div className="stats-section">
        <h2 className="stats-title">Estadísticas</h2>
        <div className="stats-list">
          <div className="stat-item">
            <span className="stat-label">Mensajes enviados:</span>
            <span className="stat-value">47</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Tareas completadas:</span>
            <span className="stat-value">23</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Días activo:</span>
            <span className="stat-value">15</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
