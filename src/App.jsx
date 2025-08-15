import { menuData } from "../menuData/MenuData";
import "./App.css";
import MenuList from "./Components/MenuList";

function App() {
  const hovedretter = menuData.filter(
    (hovedrett) => hovedrett.kategori === "Hovedrett"
  );

  const desserter = menuData.filter(
    (dessert) => dessert.kategori === "Dessert"
  );
  const forretter = menuData.filter(
    (forrett) => forrett.kategori === "Forrett"
  );

  return (
    <>
      <h1 className=" font-bold mb-10 tracking-wide">Meny</h1>
      <h2 className=" font-bold text-xl bg-pink-300 p-3 mb-5 tracking-wide">
        Forrett
      </h2>
      <section className="mb-10">
        {forretter.map((forrett) => (
          <MenuList
            kategori={forrett.kategori}
            tittel={forrett.tittel}
            ingredienser={forrett.ingredienser}
            pris={forrett.pris}
          />
        ))}
      </section>
      <h2 className=" font-bold text-xl bg-pink-300 p-3 mb-5 tracking-wide">
        Hovedrett
      </h2>
      <section className="mb-10">
        {hovedretter.map((hovedrett) => (
          <MenuList
            kategori={hovedrett.kategori}
            tittel={hovedrett.tittel}
            ingredienser={hovedrett.ingredienser}
            pris={hovedrett.pris}
          />
        ))}
      </section>
      <section className=" font-bold mb-10 ">
        <h2 className="text-xl bg-pink-300 p-3 mb-5 tracking-wide">Dessert</h2>
        {desserter.map((dessert) => (
          <MenuList
            kategori={dessert.kategori}
            tittel={dessert.tittel}
            ingredienser={dessert.ingredienser}
          />
        ))}
      </section>
      <div className="h-96 w-3xl bg-[url('/food.jpg')] bg-blend-multiply bg-cover bg-center"></div>
      {/* <img
      
          src="/food.jpg"
          alt="picture of food"
        /> */}
      {/* </div> */}
      //{" "}
    </>
  );
}

export default App;
