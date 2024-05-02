import { FaBars, FaCartShopping, FaPerson, FaUser } from "react-icons/fa6";
import logo from "../logo.png";
import { FaHamburger, FaSearch } from "react-icons/fa";

function Header() {

  const abrirCarrinho = () => {
    console.log('abriu')
  }

  return (
    <div className="flex justify-around bg-[#ffe600] px-6 py-5 items-center">
      <img src={logo} alt="logo mercado livre" />

      <div className="flex items-center bg-white py-2 px-2 gap-2">
        <input type="text" placeholder="Buscar produtos" className="w-[300px] border-none outline-none" />
        <FaSearch className="text-slate-600" />
      </div>

      <div className="flex px-6 items-center gap-4">
        {/* <FaUser className="h-25 cursor-pointer"/>
        <FaCartShopping className="h-25 cursor-pointer" onClick={abrirCarrinho}/> */}
        <FaBars className="h-[50px] cursor-pointer"/>
      </div>


    </div>
  );
}

export default Header;
