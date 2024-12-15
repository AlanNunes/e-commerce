import { addItem } from "../state/cart/cartSlice";
import { useAppDispatch } from "../state/hooks";

interface Props {
  id: number;
  name: string;
  imgUri: string;
  price: number;
}
function CatalogItem({ id, name, imgUri, price }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog-item">
      <div className="catalog-item-title">{name}</div>
      <div className="catalog-item-img">
        <img src={imgUri} />
      </div>
      <div className="catalog-item-price">R$ {price}</div>
      <div>
        <button
          className="catalog-item-add-to-chart"
          onClick={() => {
            dispatch(
              addItem({
                id: id,
                price: price,
              })
            );
          }}
        >
          add to chart
        </button>
        <button className="catalog-item-buy-now">buy now</button>
      </div>
    </div>
  );
}

export default CatalogItem;
