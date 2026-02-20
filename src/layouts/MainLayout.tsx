import { Outlet } from "react-router-dom"
import Navbar from "../components/navigation/Navbar"

function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      <div className="h-screen grid grid-rows-[auto_1fr_auto]">
        <Navbar />
        <main className="overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout