import CarrosselProdutos from "../components/CarrosselProdutos";
import Header from "../components/Header";

function Home() {
  return (
    <div className="flex flex-col items-center gap-7 bg-[#ebebeb] overflow-x-hidden w-screen">
      <Header />
      <CarrosselProdutos categoria={"iphone"} />
      <CarrosselProdutos categoria={"notebook"}/>
      <CarrosselProdutos categoria={"mouse"} />
    </div>
  );
}

export default Home;
