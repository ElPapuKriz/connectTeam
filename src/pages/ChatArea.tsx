import { CHAT_AREA as chats } from "../data/ChatArea.data";


const ChatArea = () => {
  return (
    <>
      <div className="contenedor-chatArea">
        <div className="filtrarChats">
          <select name="" id="">
            <option value="">Produccion</option>
            <option value="">Administración</option>
            <option value="">Contabilidad</option>
            <option value="">Logística</option>
            <option value="">Recursos humanos</option>
          </select>
        </div>

        <div className="chatArea">
          {
            chats.map((chat) =>

              <div className="contenedor-mensaje">
                {chat.emisor}
                {chat.msg}
                {chat.hora}
              </div>
            )}
        </div>

        <div className="contenedor-input-msg">
          <input type="text" placeholder="Escribe un mensaje..."/>
          <button type="button">📩</button>
        </div>
      </div>
    </>
  )
}

export default ChatArea;