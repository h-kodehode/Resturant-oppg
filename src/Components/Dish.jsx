export default function Dish({ tittel, ingredienser, pris }) {
  return (
    <>
      <section className=" font-bold mb-10 ">
        <h2 className="text-2xl mb-3">{tittel}</h2>
        <p className=" italic text-sm mb-2.5 tracking-wide ">{ingredienser}</p>
        <span className="italic text-xl inline-block border-b border-pink-200 w-[768px] my-4">
          {pris}
        </span>
      </section>
    </>
  );
}
