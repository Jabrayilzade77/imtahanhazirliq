import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Basket from "./pages/Basket";
import WishList from "./pages/WishList";
import BasketProvider from "./context/BasketProvider";
import WishListProvider from "./context/WishLIstProvider";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <BasketProvider>
        <WishListProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="basket" element={<Basket />} />
                <Route path="wishList" element={<WishList />} />
                <Route path="admin" element={<Admin />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </WishListProvider>
      </BasketProvider>
    </>
  );
}

export default App;
