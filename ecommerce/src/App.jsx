import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import WhishList from "./pages/WhishList";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Routes>
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Routes>
        <Route path="/products/:category" element={<ProductList />} />
      </Routes>
      <Routes>
        <Route path="/products" element={<ProductList />} />
      </Routes>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      </Routes>
      <Routes>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
      <Routes>
        <Route path="/whishlist" element={ <WhishList />} />
      </Routes>
    </Router>
  );
};

export default App;