
import { Outlet } from 'react-router-dom'
import { IconsNavBar } from '../components/NavBar/IconsNavBar'
import '../styles/layouts/MainLayout.css'

export const MainLayout = () => {

    return (
        <div className="layout-container">

            {/* 1. EL HUECO PARA EL CONTENIDO (Home, Files, etc.) */}
            <div className="content-area">
                <Outlet />
            </div>

            {/* 2. TU NAVBAR FIJA ABAJO */}
            <IconsNavBar />

        </div>
    )

}
