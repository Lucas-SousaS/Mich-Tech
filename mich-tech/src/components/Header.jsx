import { FaBars } from "react-icons/fa6";
import logo from "../logo.png";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function Header({ abrirMenu, fecharMenu }) {
  const [contPesquisa, setPesquisa] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex flex-col w-full">
    <div className="flex justify-around bg-[#ffe600] px-6 py-5 items-center w-[100vw] ">
      <img src={logo} alt="logo mercado livre" />

      <div className="relative">
        <div className={`z-10 flex flex-col justify-end items-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]`}>
          <div className="flex items-center bg-white py-2 px-2 gap-2 rounded-xl ">
            <input
              type="text"
              placeholder="Buscar produtos"
              className="w-[300px] border-none outline-none"
              value={inputValue}
              onChange={handleInputChange}
            />

            <FaSearch className="text-slate-600 hover:text-red-500 transition-all" />
          </div>

         
        </div>

        <div className="flex h-32 bg-slate-600 absolute left-0 top-0"></div>
      </div>


      <button onClick={abrirMenu} className="flex px-6 items-center gap-4">
        <FaBars className="h-[50px] cursor-pointer" />
      </button>
    </div>

    {inputValue.trim() !== '' && (
        <div className="z-10 flex flex-col  bg-gray-600 h-80">ola</div>
      )}
      </div>
  );
}

export default Header;
