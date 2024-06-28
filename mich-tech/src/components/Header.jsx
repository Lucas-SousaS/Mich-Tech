import { FaBars } from "react-icons/fa6";
import logo from "../logo.png";
import {  FaSearch } from "react-icons/fa";

function Header({ abrirMenu, fecharMenu }) {
  return (
    <div className="flex justify-around bg-[#ffe600] px-6 py-5 items-center w-[100vw] ">
      <img src={logo} alt="logo mercado livre" />

      <div className="relative">
        <div className="flex items-center bg-white py-2 px-2 gap-2 rounded-xl">
          <input
            type="text"
            placeholder="Buscar produtos"
            className="w-[300px] border-none outline-none"
          />
          <FaSearch className="text-slate-600 hover:text-red-500 transition-all" />
        </div>
        <div className="flex h-32 bg-slate-600 absolute left-0 top-0" >
          
        </div>
      </div>

      <button onClick={abrirMenu} className="flex px-6 items-center gap-4">
        <FaBars className="h-[50px] cursor-pointer" />
      </button>
    </div>
  );
}

export default Header;
