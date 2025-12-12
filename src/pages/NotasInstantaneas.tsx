// pages/NotasInstantaneas.tsx
import { useState } from 'react'
import { NOTAS_RECIBIDAS } from "../data/NotasInstantaneas.data"
import "../styles/pages/NotasInstantaneas.css"

const NotasInstantaneas = () => {
  const [mensaje, setMensaje] = useState('')
  const [notas, setNotas] = useState(NOTAS_RECIBIDAS)

  const obtenerHoraActual = () => {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    return `${horas}:${minutos}`;
  }

  const generarId = () => {
    return `nota-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  const handleEnviarTodos = () => {
    if (!mensaje.trim()) return
    
    const nuevaNota = {
      id: generarId(),
      msg: mensaje,
      hora: obtenerHoraActual(),
      receptor: 'Todos',
      emisor: 'Yo'
    }

    // Agrega la nueva nota al principio del array
    setNotas(prev => [nuevaNota, ...prev])
    setMensaje('')
  }

  const handleEnviarArea = () => {
    if (!mensaje.trim()) return
    
    const nuevaNota = {
      id: generarId(),
      msg: mensaje,
      hora: obtenerHoraActual(),
      receptor: 'Mi Área',
      emisor: 'Yo'
    }

    // Agrega la nueva nota al principio del array
    setNotas(prev => [nuevaNota, ...prev])
    setMensaje('')
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.shiftKey) {
      // Shift + Enter envía a mi área
      handleEnviarArea()
    } else if (e.key === 'Enter') {
      // Enter solo envía a todos
      handleEnviarTodos()
    }
  }

  return (
    <div className='contenedor-tareas'>
      <h3>Notas instantáneas</h3>
      <h5>Envía mensajes rápidos y urgentes</h5>

      <div className="enviar-notas">
        <input 
          type="text"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Escribe una nota............"
        />
        <div className="botones">
          <button 
            type="button"
            onClick={handleEnviarTodos}
            disabled={!mensaje.trim()}
          >
            Enviar a Todos
          </button>
          <button 
            type="button"
            onClick={handleEnviarArea}
            disabled={!mensaje.trim()}
          >
            Enviar a mi Área
          </button>
        </div>
      </div>

      <h5>Notas recientes ({notas.length})</h5>

      <div className="notas-rápidas">
        {notas.map(nota => (
          <div key={nota.id} className="nota">
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
    </div>
  )
}

export default NotasInstantaneas