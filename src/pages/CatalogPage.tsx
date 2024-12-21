import CartMenu from "../components/CartMenu";
import Catalog from "../components/Catalog";

function CatalogPage() {
  return (
    <div className="catalog-page">
      <div className="catalog-page-cart-menu">
        <CartMenu />
      </div>
      <Catalog />
    </div>
  );
}

export default CatalogPage;
