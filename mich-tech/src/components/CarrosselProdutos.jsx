import { useEffect, useState } from "react";
import CardProduto from "./CardProduto";
import Loading from "./Loading";

function CarrosselProdutos({categoria}) {

    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${categoria}`;

    const [produtos, setProdutos] = useState();

    useEffect(()=>{
        fetch(url).then(data => data.json()).then(res => setProdutos(res.results))
    },[])

    return ( 
        <div className="w-[90vw]   p-4 gap-4 flex overflow-x-auto h-96 items-center">
            {produtos ? produtos.map(item => <CardProduto item={item} /> ) : <Loading />}
        </div>
     );
}

export default CarrosselProdutos;