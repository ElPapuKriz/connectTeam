import { Outlet } from "react-router"
import { NavBar } from "../NavBar/NavBar"


export const MainLayout = () => {
  return (
   <>
   
    <main className="content-app">
      <Outlet/>
    </main>
    
    <NavBar/>

   </>
  )
}
