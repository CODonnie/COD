import { Outlet } from "react-router-dom"
import Navbar from "../components/navigation/Navbar"

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container-custom">
        <Outlet />
      </main>
      <div className="py-2 text-center border border-custom fixed bottom-0 left-0 right-0 bg-white">
        <p>Footer</p>
      </div>
    </div>
  )
}

export default MainLayout