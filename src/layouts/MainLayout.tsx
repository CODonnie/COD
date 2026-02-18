import { Outlet } from "react-router-dom"
import Navbar from "../components/navigation/Navbar"

function MainLayout() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      <main className="overflow-hidden">
        <Outlet />
      </main>
      <div className="py-2 text-center border border-custom bg-white">
        <p>Footer</p>
      </div>
    </div>
  )
}

export default MainLayout