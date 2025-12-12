// pages/ComunicadosOficiales.tsx
import { COMUNICADOS_JEFE as com } from "@/data/ComunicadosOficiales.data"
import "@/styles/pages/ComunicadosOficiales.css"

const ComunicadosOficiales = () => {
  return (
    <div className="comunicados-container">
      {/* Header */}
      <header className="comunicados-header">
        <div className="header-logo-section">
          <img src="/logo.svg" alt="ConnectTeam" className="header-logo" />
          <div>
            <h1 className="header-title">
              <span className="text-connect">Connect</span>
              <span className="text-team">Team</span>
            </h1>
            <p className="header-subtitle">Comunidad del Jefe</p>
          </div>
        </div>
      </header>

      {/* Contenido */}
      <div className="comunicados-content">
        <h4>Anuncios oficiales de la empresa</h4>

        <div className="contenedor-comunicados">
          {com.map(c => (
            <div key={c.id} className="contenedor-mensaje-jefe">
              <h3 className="mensaje-title">{c.title}</h3>
              <div className="mensaje-date">
                <svg className="icon-calendar" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                </svg>
                {c.date}
              </div>
              <p className="mensaje-text">{c.msg}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ComunicadosOficiales