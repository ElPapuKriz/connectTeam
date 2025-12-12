// pages/NotasInstantaneas.tsx
import { useState } from 'react'
import { NOTAS_RECIBIDAS } from "../data/NotasInstantaneas.data"
import "../styles/pages/NotasInstantaneas.css"

const NotasInstantaneas = () => {
  const [mensaje, setMensaje] = useState('')

  const handleEnviarTodos = () => {
    if (!mensaje.trim()) return
    console.log('Enviar a todos:', mensaje)
    setMensaje('')
    // TODO: Implementar lógica de envío
  }

  const handleEnviarArea = () => {
    if (!mensaje.trim()) return
    console.log('Enviar a mi área:', mensaje)
    setMensaje('')
    // TODO: Implementar lógica de envío
  }

  return (
    <>
      <h3>Notas instantáneas</h3>
      <h5>Envía mensajes rápidos y urgentes</h5>

      <div className="enviar-notas">
        <input 
          type="text"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribe una nota............"
        />
        <div className="botones">
          <button 
            type="button"
            onClick={handleEnviarTodos}
          >
            Enviar a Todos
          </button>
          <button 
            type="button"
            onClick={handleEnviarArea}
          >
            Enviar a mi Área
          </button>
        </div>
      </div>

      <h5>Notas recientes</h5>

      <div className="notas-rápidas">
        {NOTAS_RECIBIDAS.map(nota => (
          <div key={nota.id} className="nota">  {/* ✅ KEY agregado */}
            <div className="nota-contenido">
              <p>{nota.msg}</p>
            </div>
            <div className="nota-especificaciones">
              <div className="nota-tiempo">
                {nota.hora}
              </div>
              <div className="nota-receptor">
                {nota.receptor}
              </div>
              <div className="nota-emisor">
                {nota.emisor}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default NotasInstantaneas