import { Routes, Route } from "react-router"

import Home from "./pages/Home"
import { MainLayout } from "./components/layouts/MainLayout"
import { AuthLayout } from "./components/layouts/AuthLayout"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Page404 from "./pages/Page404"
import ChatArea from "./pages/ChatArea"
import ComunicadosOficiales from "./pages/ComunicadosOficiales"
import NotasInstantaneas from "./pages/NotasInstantaneas"
import TareasRecordatorios from "./pages/TareasRecordatorios"

function App() {

  return (

    <Routes>

      {/* Rutas con Nav */}

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home/>}/>
        <Route path="/chatarea" element={<ChatArea/>}/>
        <Route path="/comunicadosoficiales" element={<ComunicadosOficiales/>}/>
        <Route path="/notasinstantaneas" element={<NotasInstantaneas/>}/>
        <Route path="/tareasrecordatorios" element={<TareasRecordatorios/>}/>
      </Route>

      {/* Rutas sin Nav */}

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Route>

      <Route path="*" element={<Page404/>}/>

    </Routes>

  )
}

export default App
