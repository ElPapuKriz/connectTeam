import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return (
    <>

        <main className="content-home">
            <Outlet/>
        </main>

    </>
    )
}
