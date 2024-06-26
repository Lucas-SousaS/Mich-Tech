import { useState } from "react";
import estilo from '../styles/CardProduto.module.css'

function CardProduto({item}) {

    const [desconto, setDesconto] = useState();
    if (item.original_price !== item.price && item.original_price !== null){
        var parte = item.price
        var total = item.original_price

        var descontoF = ((parte / total)*100).toFixed(2)
        console.log(descontoF)
    }
    

    return ( 
        <div className="bg-[#fff] flex flex-col p-3 h-80 w-48 flex-shrink-0 gap-2 relative">
            <div className="flex justify-center items-center w-full h-28">
                <img src={item.thumbnail} alt="imagem" className="h-full"/>
            </div>

            <h2 className="text-ellipsis truncate">{item.title}</h2>
            {item.original_price !== item.price && item.original_price !== null ? 
            
            <div>
            <h1 className="text-[rgba(0,0,0,0.4)] "><s>R$ {item.original_price}</s></h1>
            <h1 className="font-bold">R$ {(item.price).toFixed(2).replace(".",",")}</h1>
            <p className="text-sm">em 12X R${((item.price)/12).toFixed(2).replace(".",",")}</p>
            </div>    
            
            : <div>
            <h1 className="font-bold">R$ {(item.price).toFixed(2).replace(".",",")}</h1>
            <p className="text-sm">em 12X {((item.price)/12).toFixed(2).replace(".",",")}</p>
            </div> 
            }
            
            {item.shipping.free_shipping === true ? <h1>frete gratis</h1> : null}

            {item.original_price !== item.price && item.original_price !== null ? 
            <div className="absolute left-2 top-2 bg-[#00A650] text-white text-xs font-bold p-1 rounded-md">{(100-((item.price/item.original_price)*100)).toFixed(0)}%</div> 
            : null}
        
            <div className={`flex justify-center items-center p-1 bg-[#ebebeb] absolute bottom-0 w-3/4 left-[50%] translate-x-[-50%] translate-y-[-40%] ${estilo.divButton}`}>
                <button className={`font-bold ${estilo.button}`}>Comprar</button>
            </div>
        </div>
     );
}

export default CardProduto;