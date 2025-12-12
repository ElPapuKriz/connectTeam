import { CHAT_AREA as chats } from "../data/ChatArea.data";
import '../styles/pages/ChatArea.css'

const ChatArea = () => {
  return (
    <>
      <div className="contenedor-chatArea">
        {/* Header */}
        <div className="chat-header">
          <div className="chat-logo">💬</div>
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
          <select>
            <option value="">Estadística</option>
            <option value="">Producción</option>
            <option value="">Administración</option>
            <option value="">Contabilidad</option>
            <option value="">Logística</option>
            <option value="">Recursos humanos</option>
          </select>
        </div>

        {/* Área de chat */}
        <div className="chatArea">
          {chats.map((chat, index) => (
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
          <input type="text" placeholder="Escribe un mensaje......"/>
          <button type="button">✈️</button>
        </div>
      </div>
    </>
  )
}

export default ChatArea;