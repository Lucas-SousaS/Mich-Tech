import { useState } from "react";
import formatador from "../tools/formatador";
import PopUpProdutos from "./PopUpProdutos";

function CardBusca({ item }) {

    const [popUpProdutos, setPopUpProdutos] = useState(false);

    const popUpVisivel = () => {
        setPopUpProdutos(!popUpProdutos)
    } 

    return ( <div className="shrink-0 max-w-sm w-28 flex flex-col justify-center gap-3 bg-white p-2 transition-all">
        <div className="flex justify-center w-full" >
          <img src={item.thumbnail} alt={`foto do ${item.title}`} className="cursor-pointer" onClick={popUpVisivel}/>
        </div>
        {popUpProdutos && <PopUpProdutos id={item.id} />}

        <h1
          style={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
          }}
          className="w-full hover:text-[#3483fa] transition-all cursor-pointer"
        >
          {item.title}
        </h1>

        <h2>R$ {formatador(item.price)}</h2>
      </div> );
}

export default CardBusca;