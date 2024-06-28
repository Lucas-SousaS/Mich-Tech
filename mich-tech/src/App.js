
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MenuLateral from "./components/MenuLateral";
import Home from "./pages/Home";

function App() {

  const [isVisibleMenu, setVisibleMenu] = useState()

  const abrirMenu = () => {
    setVisibleMenu("translate-x-[0%]")
  }
  
  const fecharMenu = () => {
    setVisibleMenu("translate-x-[100%]")
  }

  useEffect(() => {
    fecharMenu()
  }, [])



  return (
    <div className="flex flex-col overflow-x-hidden bg-[#ebebeb] h-max min-h-screen gap-6">
      <Header abrirMenu={abrirMenu} fecharMenu={fecharMenu} />
      <Home />
      <MenuLateral visible={isVisibleMenu} fecharMenu={fecharMenu} />
      
    </div>
  );
}

export default App;
