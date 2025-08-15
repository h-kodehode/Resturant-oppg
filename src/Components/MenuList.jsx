// import MenuData from "../../menuData/MenuData";

export default function MenuList({ id, tittel, pris, ingredienser, kategori }) {
  return (
    <>
      <section>
        <span>{id}</span>
        {/* <h1>{kategori}</h1> */}
        <h3>{tittel}</h3>
        <p>{ingredienser}</p>
        <span>{pris}</span>
      </section>
    </>
  );
}
