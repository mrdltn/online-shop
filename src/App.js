import './App.css';
import { BestSellers } from './BestSellers';
import { Header } from './Header';
import { Product } from './Product';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BestSellers />,
  },
  {
    path: "/product/:productId",
    element: <Product />
  },
]);

function App() {
  return (
      <div className="appContainer">
        <Header />
        <hr className="divider" />
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
