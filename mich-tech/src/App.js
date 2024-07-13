import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MenuLateral from "./components/MenuLateral";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  const [isVisibleMenu, setVisibleMenu] = useState("translate-x-[100%]"); // Inicialmente oculto

  const abrirMenu = () => {
    setVisibleMenu("translate-x-[0%]");
  };

  const fecharMenu = () => {
    setVisibleMenu("translate-x-[100%]");
  };

  useEffect(() => {
    fecharMenu();
  }, []);

  return (
    <Router>
      <div className="flex flex-col overflow-x-hidden bg-[#ebebeb] h-max min-h-screen gap-6">
        <Header abrirMenu={abrirMenu} fecharMenu={fecharMenu} />
        <MenuLateral visible={isVisibleMenu} fecharMenu={fecharMenu} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} /> {/* Rota para página não encontrada */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
