import { NOTAS_RECIBIDAS } from "../data/NotasInstantaneas.data";

const NotasInstantaneas = () => {



  return (
    <>
      <h3>Notas instantáneas</h3>
      <h5>Envía mensajes rápidos y urgentes</h5>

      <div className="enviar-notas">
        <input type="text" />
        <div className="botones">
          <button type="button">Enviar a Todos</button>
          <button type="button">Enviar a mi Área</button>
        </div>
      </div>

      <h5>Notas recientes</h5>

      <div className="notas-rápidas">
        {
          NOTAS_RECIBIDAS.map(nota => (

            <div className="nota">

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


          ))
        }

      </div>

    </>
  )
}

export default NotasInstantaneas;
