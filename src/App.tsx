import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CatalogPage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
