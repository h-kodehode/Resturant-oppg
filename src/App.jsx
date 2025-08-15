import { menuData } from "../menuData/MenuData";
import "./App.css";
import MenuList from "./Components/MenuList";
import Dish from "./Components/Dish";

function App() {
  const hentKategori = (kategori) =>
    menuData.filter((rett) => rett.kategori === kategori);

  const hovedretter = hentKategori("Hovedrett");
  const desserter = hentKategori("Dessert");
  const forretter = hentKategori("Forrett");

  return (
    <>
      <h1 className="text-5xl font-bold mb-10 tracking-wide">Meny</h1>
      <h2 className=" font-bold text-xl bg-pink-300 p-3 mb-5 tracking-wide">
        Forrett
      </h2>
      <MenuList retter={forretter} />
      <h2 className=" font-bold text-xl bg-pink-300 p-3 mb-5 tracking-wide">
        Hovedrett
      </h2>
      <MenuList retter={hovedretter} />
      <h2 className="text-xl bg-pink-300 p-3 mb-5 tracking-wide">Dessert</h2>
      <MenuList retter={desserter} />

      {/* Bajgrunnsbilde */}
      <div className="h-96 w-3xl bg-[url('/food.jpg')] bg-blend-multiply bg-cover bg-center"></div>
    </>
  );
}

export default App;
