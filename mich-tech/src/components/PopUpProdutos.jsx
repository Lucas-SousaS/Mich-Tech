import { useState } from "react";
import { useEffect } from "react";
import { CgClose } from "react-icons/cg";

function PopUpProdutos({ id }) {
  const url = `https://api.mercadolibre.com/items/${id}`;

  const [visivel, setVisivel] = useState();
  const [produto, setProduto] = useState();

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((res) => setProduto(res));
  }, [url]);

  return (
    <div
      className={` justify-around items-center  w-[95%] h-[95%] bg-[#b6b6b6] rounded-lg fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex ${visivel}`}
    >
      {produto ? (
        <>
          <div>
            <img src={produto.pictures[0].url} alt="" className="h-[300px] rounded-lg" />
          </div>
          <div>
            <h1>{produto.title}</h1>
            <h1>{produto.price}</h1>
          </div>
        </>
      ) : (
        <div>aguarde ...</div>
      )}

      <button className="absolute top-4 right-4 text-3xl"><CgClose /></button>
    </div>
  );
}

export default PopUpProdutos;
