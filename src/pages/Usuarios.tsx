import { useEffect, useState } from "react";

import { api } from "../services/api";

import type{ USUARIO } from "../types/usuarios.type";



const PaginaPrueba = () => {
  const [usuarios, setUsuarios] = useState<USUARIO[]>([]);

  useEffect(() => {
    const cargarUsuarios = async () => {
      const res = await api.getUsuarios();
      setUsuarios(res.data)
    };
    cargarUsuarios();
  }, []);


  return (
    <div>
      <h1>Usuarios:</h1>
      
        <div className="listaUsuarios" >
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>nombre</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map(u =>(
                <tr key={u.id}>
                  <td >{u.id}</td>
                  <td >{u.nombre}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
    
      <button>Crear Usuario</button>
    </div>
  )
}

export default PaginaPrueba;
