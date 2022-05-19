
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import ProductsPage from "./pages/ProductsPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from './components/Layout/Layout';


const App = () => {
  const user = true
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/products" element={<ProductsPage />} /> */}
          <Route path="/products/:category" element={<ProductsPage />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={user ? <Navigate to="/"/> : <Login />}/>
          {/* <Route path="/login" element={<Login />}/> */}
          <Route path="/register" element={user ? <Navigate to="/"/> : <Register />}/>
          {/* <Route path="/register" element={<Register />} /> */}

        </Routes>
      </Layout>
    </Router>


  )
}

export default App;
