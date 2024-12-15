interface Props {
  id: number;
  name: string;
  price: number;
}
function CatalogItem({ id, name, price }: Props) {
  return (
    <div>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
}

export default CatalogItem;
