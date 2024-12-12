import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./pages/inicio";
import Catalogo from "./pages/catalogo";
import SobreNosotros from "./pages/sobre nosotros";
import Contacto from "./pages/contacto";
import NotFound from "./pages/Not Found";
import NavBar from "./components/navBar";
import Producto from "./pages/producto";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Catalogo" element={<Catalogo />} />
          <Route path="/Sobre Nosotros" element={<SobreNosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Producto/:id" element={<Producto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
