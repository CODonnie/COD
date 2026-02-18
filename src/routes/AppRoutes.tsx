import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import ProjectDetails from "../pages/ProjectDetails";

export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects/:slug" element={<ProjectDetails />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Route>
        </Routes>
        </BrowserRouter>
    );
}