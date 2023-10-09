import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  return (
    <Router>
      <Routes>
      <Route path="/login" element={admin ?  <Navigate to="/" /> : <Login />} />
      </Routes>
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Routes>
              <Route path="/" element={!admin ?  <Navigate to="/login" /> : <Home />} />
              <Route path="/users" element={!admin ?  <Navigate to="/login" /> : <UserList />}/>
              <Route path="/user/:userId" element={!admin ?  <Navigate to="/login" /> : <User />} />
              <Route path="/newUser" element={!admin ?  <Navigate to="/login" /> : <NewUser />} />
              <Route path="/products" element ={!admin ?  <Navigate to="/login" /> : <ProductList />}/>
              <Route path="/product/:productId" element ={!admin ?  <Navigate to="/login" /> : <Product />}/>
              <Route path="/newproduct" element ={!admin ?  <Navigate to="/login" /> : <NewProduct />}/>
              </Routes>
            </div>
          </>
    </Router>
  );
}

export default App;
