
import estilo from '../styles/CardProduto.module.css'
import { FaArrowDown, FaTruck } from "react-icons/fa6";
import PopUpProdutos from './PopUpProdutos';

function CardProduto({item}) {

    return ( 
        <div className="bg-[#fff] flex flex-col p-3 h-80 w-48 flex-shrink-0 gap-2 relative rounded-lg shadow-md" >
            <div className="flex justify-center items-center w-full h-28 hover:scale-110 transition-all cursor-pointer ease-in" onClick={() => {
                console.log("teste");                
            }} >
                <img src={item.thumbnail} alt="imagem" className="h-full"/>
            </div>

            <h2 className="text-ellipsis truncate hover:text-[#3483fa] transition-all cursor-pointer">{item.title}</h2>
            {item.original_price !== item.price && item.original_price !== null ? 
            
            <div>
            <h1 className="text-[rgba(0,0,0,0.4)] "><s>R$ {item.original_price}</s></h1>
            <h1 className="font-bold">R$ {(item.price).toFixed(2).replace(".",",")}</h1>
            <p className="text-sm text-gray-500">em 12X R${((item.price)/12).toFixed(2).replace(".",",")}</p>
            </div>    
            
            : <div>
            <h1 className="font-bold">R$ {(item.price).toFixed(2).replace(".",",")}</h1>
            <p className="text-sm text-gray-500">em 12X R${((item.price)/12).toFixed(2).replace(".",",")}</p>
            </div> 
            }
            
            {item.shipping.free_shipping === true ? <b className="text-[#00a650] flex items-center gap-2">Frete Gratis <FaTruck /></b> : null}

            {item.original_price !== item.price && item.original_price !== null ? 
            <div className="absolute left-2 top-2 bg-[#00A650] text-white text-xs font-bold p-1 rounded-md flex items-center gap-1"> <FaArrowDown /> {(100-((item.price/item.original_price)*100)).toFixed(0)}%</div> 
            : null}
        
            <div className={`flex justify-center items-center p-1 bg-[#ebebeb] absolute bottom-0 w-3/4 left-[50%] translate-x-[-50%] translate-y-[-40%] ${estilo.divButton}`}>
                <button className={`font-bold ${estilo.button}`}>Comprar</button>
            </div>


            
        </div>


     );
}

export default CardProduto;