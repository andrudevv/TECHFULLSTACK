import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./pages/inicio";
import Navbar from "./components/Navbar";
import Experiencias from "./pages/Experiencias";
import Tecnologias from "./pages/tecnologias";

function App() {
  return (

    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/inicio" element={<Inicio/> } />
          <Route path="/experiencias" element={<Experiencias/> } />
          <Route path="/tecnologias" element={<Tecnologias/> } />
        </Routes>

    </BrowserRouter>
  )
}

export default App
