import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return (
    <>

        <main className="content-app">
            <Outlet/>
        </main>

    </>
    )
}
