import { useState } from "react";
import { useEffect } from "react";
import formatador from "../tools/formatador";

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
          produtos.map((item) => (
            <div className="shrink-0 max-w-sm w-28 flex flex-col justify-center gap-3 bg-white p-2 transition-all">
              <div className="flex justify-center w-full">
                <img src={item.thumbnail} alt={`foto do ${item.title}`} className="cursor-pointer" />
              </div>

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
            </div>
          ))
        ) : (
          <p>Buscando ...</p>
        )}
      </div>
    </div>
  );
}

export default ResultBusca;
