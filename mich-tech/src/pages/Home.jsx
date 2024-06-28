
import CarrosselProdutos from "../components/CarrosselProdutos";
import { BiSolidCart } from "react-icons/bi";
import PopUpProdutos from "../components/PopUpProdutos";

function Home() {
  return (
    <div className="flex flex-col items-center gap-7 bg-[#ebebeb] overflow-x-hidden w-screen">
      
      <CarrosselProdutos categoria={"iphone"} />
      <CarrosselProdutos categoria={"notebook"}/>
      <CarrosselProdutos categoria={"mouse"} />
      <PopUpProdutos id={"MLB4202945426"}  />

      <button className="fixed right-0 bottom-0 translate-x-[-50%] translate-y-[-50%] bg-[#00A650] h-14 w-14 rounded-full flex items-center justify-center">
        <BiSolidCart className="text-3xl text-white" />
      </button>
    </div>
  );
}

export default Home;
