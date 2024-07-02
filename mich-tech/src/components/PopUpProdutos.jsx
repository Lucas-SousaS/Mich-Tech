import { useState } from "react";
import { useEffect } from "react";
import { CgClose } from "react-icons/cg";
import estilo from "../styles/PopUpProdutos.module.css";
import formatador from "../tools/formatador";

function PopUpProdutos({ id }) {
  const url = `https://api.mercadolibre.com/items/${id}`;

  const [visivel, setVisivel] = useState();
  const [produto, setProduto] = useState();

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((res) => setProduto(res));
  }, [url]);

  const fecharPopUp = () => {
    setVisivel("hidden");
  };

  return (
    <div
      className={`${estilo.container} z-10 justify-around items-center  w-[90%] h-[80%] bg-[#d2d2d2] rounded-lg fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex ${visivel}`}
    >
      <div className="bg-white flex w-[100%] h-[100%] items-center justify-center gap-8 rounded-xl">
        {produto ? (
          <>
            <div className=" rounded-lg flex items-center px-5 bg-white h-[70%] gap-2">
              <div className="flex flex-col h-[300px] overflow-y-auto gap-4">
                {produto.pictures &&
                  produto.pictures.map((item) => (
                    <div key={item.id} className="flex items-center justify-center p-1 border-2 border-[#b8b8b87b] rounded-md h-24 w-24">
                      {" "}
                      <img
                        src={item.url}
                        alt="imagens"
                        className="h-auto w-auto"
                      />{" "}
                    </div>
                  ))}
              </div>
              <div className="flex h-[100%] items-center justify-center max-w-[600px]">
                <img
                  src={produto.pictures[0].url}
                  alt=""
                  className="scale-50"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-start h-full gap-6 ">
              <div>
                <h1 className="w-[400px] text-2xl font-medium">
                  {produto.title}
                </h1>
                <h3>classificação</h3>
              </div>
              <div>
                {produto.original_price !== produto.price &&
                produto.original_price !== null ? (
                  <div>
                    <h1 className="text-[rgba(0,0,0,0.4)] ">
                      <s>R$ {produto.original_price}</s>
                    </h1>
                    <h1 className="font-semibold text-2xl">
                      R$ {formatador(produto.price)} <span className="text-[#3483fa] text-base">{(100-((produto.price/produto.original_price)*100)).toFixed(0)}% OFF</span>
                    </h1>
                    <p className="text-xl text-gray-700">
                      ou 12X de <span className="font-bold"> R$ {formatador(produto.price/12)}</span> sem juros
                    </p>
                  </div>
                ) : (
                  <div>
                    <h1 className="font-bold">
                      R$ {formatador(produto.price)}
                    </h1>
                    <p className="text-sm text-gray-500">
                      em 12X R$ {formatador(produto.price / 12)}
                    </p>
                  </div>
                )}                
              </div>

              <div className="flex gap-2">
                <h3 className="text-slate-600 font-semibold">Estoque disponível</h3>
                <span className="text-slate-500 ">(3 unidades)</span>
              </div>

              <div className="flex flex-col w-full items-center justify-center gap-2">
                <button className="bg-[#3483fa] rounded-md text-white text-lg font-semibold w-2/3 p-2 transition-all hover:bg-[#2866c2]">Comprar</button>
                <button className="bg-[#3483fa35] rounded-md text-[#3483fa] text-lg font-semibold w-2/3 p-2 transition-all hover:bg-[#6ba0f074] ">Adicionar ao carrinho</button>
              </div>
            </div>
          </>
        ) : (
          <div>aguarde ...</div>
        )}
      </div>

      <button className="absolute top-6 right-6 text-3xl" onClick={fecharPopUp}>
        <CgClose />
      </button>
    </div>
  );
}

export default PopUpProdutos;
