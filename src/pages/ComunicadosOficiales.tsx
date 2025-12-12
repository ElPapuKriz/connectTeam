import { COMUNICADOS_JEFE as com } from "@/data/ComunicadosOficiales.data";

const ComunicadosOficiales = () => {
  return (
    <>
        <h4>Comunicados del Jefe</h4>
        <h5>Anuncios oficiales de la empresa</h5>

        <div className="contenedor-comunicados">
          {com.map(c => 
            <div className="contenedor-mensaje-jefe">
              {c.title}
              {c.date}
              {c.msg}
            </div>
          )}
        </div>
    </>
  )
}

export default ComunicadosOficiales;