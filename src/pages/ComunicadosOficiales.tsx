// pages/ComunicadosOficiales.tsx
import { useState } from 'react'
import { COMUNICADOS_JEFE as com } from "@/data/ComunicadosOficiales.data"
import "@/styles/pages/ComunicadosOficiales.css"

const ComunicadosOficiales = () => {
  const [comunicados, setComunicados] = useState(com)
  const [modalAbierto, setModalAbierto] = useState(false)
  const [nuevoComunicado, setNuevoComunicado] = useState({
    title: '',
    msg: '',
    date: ''
  })

  const generarId = () => {
    return `com-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  }

  const obtenerFechaActual = () => {
    const ahora = new Date()
    const dia = ahora.getDate().toString().padStart(2, '0')
    const mes = (ahora.getMonth() + 1).toString().padStart(2, '0')
    const año = ahora.getFullYear()
    return `${dia}/${mes}/${año}`
  }

  const abrirModal = () => {
    setModalAbierto(true)
  }

  const cerrarModal = () => {
    setModalAbierto(false)
    setNuevoComunicado({ title: '', msg: '', date: '' })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNuevoComunicado(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const agregarComunicado = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (nuevoComunicado.title.trim() === '' || nuevoComunicado.msg.trim() === '') {
      alert('El título y el mensaje son obligatorios')
      return
    }

    const comunicadoNuevo = {
      id: generarId(),
      title: nuevoComunicado.title,
      msg: nuevoComunicado.msg,
      date: nuevoComunicado.date || obtenerFechaActual()
    }

    // Agrega el nuevo comunicado al principio
    setComunicados(prev => [comunicadoNuevo, ...prev])
    cerrarModal()
  }

  return (
    <div className="comunicados-container">
      {/* Header */}
      <div className="chat-header">
        <div className="chat-logo">
          <img src="logo.jpg" alt="logo" width={'50px'} />
        </div>
        <div className="chat-title">
          <h2>
            <span className="connect">Connect</span>
            <span className="team">Team</span>
          </h2>
          <p>Comunicados Oficiales</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="comunicados-content">
          <h4>Anuncios oficiales de la empresa</h4>
        <div className="comunicados-header">
          <button 
            type="button" 
            className="btn-nuevo-comunicado"
            onClick={abrirModal}
          >
            + Nuevo Comunicado
          </button>
        </div>

        <div className="contenedor-comunicados">
          {comunicados.map(c => (
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

      {/* Modal */}
      {modalAbierto && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Nuevo Comunicado Oficial</h3>
              <button className="btn-cerrar" onClick={cerrarModal}>×</button>
            </div>
            
            <form onSubmit={agregarComunicado}>
              <div className="form-group">
                <label htmlFor="title">Título *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={nuevoComunicado.title}
                  onChange={handleInputChange}
                  placeholder="Ej: Reunión General de Equipo"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="msg">Mensaje *</label>
                <textarea
                  id="msg"
                  name="msg"
                  value={nuevoComunicado.msg}
                  onChange={handleInputChange}
                  placeholder="Escribe el comunicado oficial..."
                  rows={6}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="date">Fecha (opcional)</label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  value={nuevoComunicado.date}
                  onChange={handleInputChange}
                  placeholder="DD/MM/AAAA (deja vacío para usar fecha actual)"
                />
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancelar" onClick={cerrarModal}>
                  Cancelar
                </button>
                <button type="submit" className="btn-guardar">
                  Publicar Comunicado
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ComunicadosOficiales