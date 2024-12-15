import { useEffect } from "react";
import {
  isCatalogLoading,
  refreshCatalogAsync,
  selectCatalog,
} from "../state/catalog/catalogSlice";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import CatalogItem from "./CatalogItem";
import Loading from "./Loading";

function Catalog() {
  const dispatch = useAppDispatch();
  const catalog = useAppSelector(selectCatalog);
  const isLoading = useAppSelector(isCatalogLoading);

  useEffect(() => {
    dispatch(refreshCatalogAsync());
  }, [dispatch]);
  return (
    <div>
      <h1>Catalog</h1>
      {isLoading && <Loading />}
      {catalog.map((c) => (
        <CatalogItem
          key={c.id}
          id={c.id}
          name={c.name}
          price={c.price}
        ></CatalogItem>
      ))}
    </div>
  );
}

export default Catalog;
