import Dish from "./Dish";

export default function MenuList({ retter }) {
  return (
    <>
      <div>
        {retter.map((rett) => (
          <Dish {...rett} />
        ))}
      </div>
    </>
  );
}
