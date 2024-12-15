import { useAppSelector } from "../state/hooks";
import { selectCart } from "../state/cart/cartSlice";
import { useEffect } from "react";

function CartPage() {
  const cart = useAppSelector(selectCart);
  useEffect(() => {}, [cart]);
  return (
    <div>
      <h1>Cart</h1>
      <div>
        <div>Total: R$ {cart.total}</div>
        <div>Amount: {cart.count}</div>
        <div>Products:</div>
        <div>
          {cart.items.map((item) => (
            <>
              <div>{item.name}</div>
              <div>{item.price}</div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
