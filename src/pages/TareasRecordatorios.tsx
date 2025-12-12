import { useState } from 'react';
import { TAREAS_RECORDATORIOS as tareas } from "../data/TareasRecordatorios.data";
import '../styles/pages/TareasRecordatorios.css'

const TareasRecordatorios = () => {
  const [listaTareas, setListaTareas] = useState(tareas);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [nuevaTarea, setNuevaTarea] = useState({
    titulo: '',
    msg: '',
    fecha: '',
    emisor: ''
  });

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setNuevaTarea({ titulo: '', msg: '', fecha: '', emisor: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNuevaTarea(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const agregarTarea = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (nuevaTarea.titulo.trim() === '') {
      alert('El título es obligatorio');
      return;
    }

    setListaTareas(prev => [...prev, nuevaTarea]);
    cerrarModal();
  };

  return (
    <>
      <div className="contenedor-tareas">
        <div className="contenedor-IngresarTareas">
          <h4>Tareas y recordatorios</h4>
          <button type="button" onClick={abrirModal}>+ Nueva Tarea</button>
        </div>

        <h5>Organiza tus pendientes</h5>

        <div className="contenedor-pendientes">
          {listaTareas.map((tarea, index) => (
            <div className="contenedor-msg" key={`${tarea.titulo}-${index}`}>
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

      {/* Modal */}
      {modalAbierto && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Nueva Tarea</h3>
              <button className="btn-cerrar" onClick={cerrarModal}>×</button>
            </div>
            
            <form onSubmit={agregarTarea}>
              <div className="form-group">
                <label htmlFor="titulo">Título *</label>
                <input
                  type="text"
                  id="titulo"
                  name="titulo"
                  value={nuevaTarea.titulo}
                  onChange={handleInputChange}
                  placeholder="Ej: Revisar documentos"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="msg">Descripción</label>
                <textarea
                  id="msg"
                  name="msg"
                  value={nuevaTarea.msg}
                  onChange={handleInputChange}
                  placeholder="Detalles de la tarea..."
                  rows={3}
                />
              </div>

              <div className="form-group">
                <label htmlFor="fecha">Fecha</label>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  value={nuevaTarea.fecha}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="emisor">Emisor</label>
                <input
                  type="text"
                  id="emisor"
                  name="emisor"
                  value={nuevaTarea.emisor}
                  onChange={handleInputChange}
                  placeholder="Ej: Juan Pérez"
                />
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancelar" onClick={cerrarModal}>
                  Cancelar
                </button>
                <button type="submit" className="btn-guardar">
                  Guardar Tarea
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default TareasRecordatorios;