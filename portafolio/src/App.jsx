import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./pages/inicio";
import Navbar from "./components/Navbar";
import Experiencias from "./pages/Experiencias";
import Tecnologias from "./pages/tecnologias";
import Portafolio from "./pages/Portafolio";
function App() {
  return (
    
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Portafolio/> } />
          <Route path="/inicio" element={<Inicio/> } />
          <Route path="/experiencias" element={<Experiencias/> } />
          <Route path="/tecnologias" element={<Tecnologias/> } />
        </Routes>
         
    </BrowserRouter>
    
  )
}

export default App
