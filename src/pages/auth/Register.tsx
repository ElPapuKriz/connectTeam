
const Register = () => {
  return (
    <>

      <h1>Aqui podras registrarte</h1>

      <h4>Crear cuenta</h4>
      <div className="formulario-registro">

        <form action="" method="post">

          <label htmlFor="input-nombres">Nombre completo</label>
          <input type="text" name="inp-nombres" id="" />

          <label htmlFor="slc-cargos">Cargo</label>
          <select name="slc-cargos" id="">

            <option value="produccion">Producción</option>
            <option value="administracion">Administración</option>
            <option value="contabilidad">Contabilidad</option>
            <option value="logistica">Logística</option>
            <option value="recursos humanos">Recursos humanos</option>

          </select>

          <label htmlFor="inp-correo">Correo institucional</label>
          <input type="text" name="inp-correo" id="" />

          <label htmlFor="inp-contrasena">Contraseña</label>
          <input type="text" name="inp-contrasena" id="" />

          <button type="submit">Registrar</button>

        </form>
      </div>


    </>
  )
}

export default Register;
