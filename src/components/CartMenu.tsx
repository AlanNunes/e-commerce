import { useAppSelector } from "../state/hooks";
import { selectCount } from "../state/cart/cartSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function CartMenu() {
  const count = useAppSelector(selectCount);
  useEffect(() => {}, [count]);
  return (
    <Link to="cart" className="cart-menu-">
      Cart - Total items {count}
    </Link>
  );
}

export default CartMenu;
