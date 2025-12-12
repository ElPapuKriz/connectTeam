import { Routes, Route } from "react-router"

import { MainLayout } from "./components/layouts/MainLayout"
import { AuthLayout } from "./components/layouts/AuthLayout"

import Home from "./pages/Home"
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login"
import Page404 from "./pages/Page404"
import ChatArea from "./pages/ChatArea"
import ComunicadosOficiales from "./pages/ComunicadosOficiales"
import NotasInstantaneas from "./pages/NotasInstantaneas"
import TareasRecordatorios from "./pages/TareasRecordatorios"
import Perfil from "./pages/Perfil"
import PaginaPrueba from "./pages/Usuarios"
import Menu from "./pages/Menu"

//Este es un comentario :v

function App() {

  return (

    <Routes>

      {/* Rutas con Nav */}

      <Route element={<MainLayout />}>

        <Route path="/home" element={<Home/>}/>
        <Route path="/chatarea" element={<ChatArea/>}/>
        <Route path="/comunicadosoficiales" element={<ComunicadosOficiales/>}/>
        <Route path="/notasinstantaneas" element={<NotasInstantaneas/>}/>
        <Route path="/tareasrecordatorios" element={<TareasRecordatorios/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/prueba" element={<PaginaPrueba/>}/>
      </Route>
        

      {/* Rutas sin Nav */}

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Menu/>}/>
      </Route>

      <Route path="*" element={<Page404/>}/>

    </Routes>

  )
}

export default App
