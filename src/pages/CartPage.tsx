import { useAppSelector, useAppDispatch } from "../state/hooks";
import {
  selectCart,
  selectCount,
  selectTotal,
  removeItem,
  removeAll,
} from "../state/cart/cartSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { groupBy } from "lodash";

interface CartItem {
  id: number;
  name: string;
  price: number;
}

function CartPage() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);
  const count = useAppSelector(selectCount);
  const total = useAppSelector(selectTotal);
  useEffect(() => {}, [dispatch, cart]);

  const toCurrency = (value: number): string =>
    value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  return (
    <div>
      <h1>Cart</h1>
      <div>
        <div>
          <h3>
            <i>{count} items | Total: R$ {toCurrency(total)}</i>
          </h3>
        </div>
        <div className="cart-page-items">
          {Object.entries(groupBy(cart.items, (item) => item.id)).map(
            (groupedItem) => {
              const items = groupedItem[1] as CartItem[];

              return (
                <div className="cart-page-item">
                  <h3>{items[0].name}</h3>
                  <p>R$ {items[0].price}</p>
                  <p>
                    <i>Total: {items.length}</i>
                  </p>
                  <button
                    className="cart-page-remove-item"
                    onClick={() => dispatch(removeItem(items[0].id))}
                  >
                    Remove
                  </button>
                </div>
              );
            }
          )}
        </div>
        <div>
          <button
            className="cart-page-remove-all"
            onClick={() => dispatch(removeAll())}
          >
            Clear
          </button>
          <button className="cart-page-confirm">Confirm</button>
        </div>
        <div>
          <p>
            <Link to="/">Go back to catalog</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
