import { useState } from "react";
import { useEffect } from "react";
import CardBusca from "./CardBusca";

function ResultBusca({ produtoNames }) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produtoNames}`;

  const [produtos, setProdutos] = useState();

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((res) => setProdutos(res.results));
  }, [url]);

  return (
    <div className="flex flex-col items-center justify-center w-2/3 gap-4 mt-4 bg-white rounded-lg ">
      <h1>Resultado Da Busca:</h1>

      <div className="w-full overflow-x-auto flex gap-8 p-3">
        {produtos ? (
          produtos.map((item) => <CardBusca key={item.id} item={item} />)
        ) : (
          <p>Buscando ...</p>
        )}
      </div>
    </div>
  );
}

export default ResultBusca;
