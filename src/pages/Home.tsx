import { useState } from 'react'
import '../styles/pages/Home.css'

export const Home = () => {

    const [user,setUser] = useState('usuario')

  return (
    <>
        <h4>Bienvenido, {user.charAt(0).toUpperCase() + user.slice(1)}</h4>
        <div className="home">
            <div className="content-home" id='comunicados_oficiales'></div>
            <div className="content-home" id='notas_instantaneas'></div>
            <div className="content-home" id='chat_area'></div>
            <div className="content-home" id='tareas_recordatorios'></div>
        </div>
    </>
  )
}

