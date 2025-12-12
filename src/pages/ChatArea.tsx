import { useState } from 'react';
import { CHAT_AREA as chats } from "../data/ChatArea.data";
import '../styles/pages/ChatArea.css'

const ChatArea = () => {
  const [mensajes, setMensajes] = useState(chats);
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [areaSeleccionada, setAreaSeleccionada] = useState('Estadística');

  const obtenerHoraActual = () => {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    return `${horas}:${minutos}`;
  };

  const enviarMensaje = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (nuevoMensaje.trim() === '') {
      return;
    }

    const mensajeNuevo = {
      emisor: 'Yo',
      msg: nuevoMensaje,
      hora: obtenerHoraActual(),
      area: areaSeleccionada
    };

    setMensajes(prev => [...prev, mensajeNuevo]);
    setNuevoMensaje('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      enviarMensaje(e);
    }
  };

  return (
    <>
      <div className="contenedor-chatArea">
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
            <p>Chat por Área</p>
          </div>
        </div>

        {/* Filtro de área */}
        <div className="filtrarChats">
          <label>Selecciona tu área</label>
          <select 
            value={areaSeleccionada}
            onChange={(e) => setAreaSeleccionada(e.target.value)}
          >
            <option value="Estadística">Estadística</option>
            <option value="Producción">Producción</option>
            <option value="Administración">Administración</option>
            <option value="Contabilidad">Contabilidad</option>
            <option value="Logística">Logística</option>
            <option value="Recursos humanos">Recursos humanos</option>
          </select>
        </div>

        {/* Área de chat */}
        <div className="chatArea">
          {mensajes.map((chat, index) => (
            <div 
              key={index} 
              className={`contenedor-mensaje ${chat.emisor === 'Yo' ? 'derecha' : 'izquierda'}`}
            >
              <div className="mensaje-emisor">{chat.emisor}</div>
              <div className="mensaje-texto">{chat.msg}</div>
              <div className="mensaje-hora">{chat.hora}</div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="contenedor-input-msg">
          <form onSubmit={enviarMensaje} style={{ display: 'flex', width: '100%' }}>
            <input 
              type="text" 
              placeholder="Escribe un mensaje......"
              value={nuevoMensaje}
              onChange={(e) => setNuevoMensaje(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button type="submit">✔</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ChatArea;