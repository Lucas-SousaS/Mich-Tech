
import { FaX } from "react-icons/fa6";

function MenuLateral({visible, fecharMenu}) {

    const estilo = `transition-all flex flex-col items-center fixed right-0  w-[25%] h-full justify-around bg-[#ebebeb] shadow-2xl transform-x-[100%] ${visible}`;

    return ( 
        
        <div className={estilo}>
            
            <div className="flex items-center w-[100%] justify-around">
                <div></div>
                <h1 className="text-2xl"><b>Menu</b></h1>
                <button onClick={fecharMenu} className="font-bold text-lg"><FaX /></button>
            </div>

            <ul>
                <li>Pedidos</li>
                <li>Computadores</li>
                <li>Celulares</li>
                <li>Periféricos</li>
            </ul>

            <div className="flex flex-col gap-2"> 
                <button className="bg-[#00a650] p-2 rounded-xl font-bold text-lg text-white hover:shadow-white transition-all shadow-md hover:brightness-125 ">Entrar</button>
                <span>Não tem login? <b>Cadastre-se</b></span>
            </div>

        </div>
     );
}

export default MenuLateral;