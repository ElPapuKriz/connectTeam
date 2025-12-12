import { TAREAS_RECORDATORIOS as tareas } from "../data/TareasRecordatorios.data";
import '../styles/pages/TareasRecordatorios.css'


const TareasRecordatorios = () => {
  return (
    <>
      <div className="contenedor-tareas">
        <div className="contenedor-IngresarTareas">
          <h4>Tareas y recordatorios</h4>
          <button type="button">+ Nueva Tarea</button>
        </div>

        Organiza tus pendientes

        <div className="contenedor-pendientes">
          {tareas.map(tarea => (
            <div className="contenedor-msg" key={tarea.titulo}>
              <div className="check">
                <input type="checkbox" name="" id="" />
                {tarea.titulo}
              </div>

              {tarea.msg}

              <div className="info">
                {tarea.fecha}
                {tarea.emisor}
              </div>
            </div>
          ))}

        </div>

      </div>
    </>
  )
}

export default TareasRecordatorios;