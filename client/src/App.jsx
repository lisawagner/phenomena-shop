
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
  Redirect,
} from "react-router-dom";
import Layout from './components/Layout/Layout';


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/">
            <Home />
          </Route> */}
          {/* <Route path="/products/:category">
            <ProductsPage />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route> */}
        </Routes>
      </Layout>
    </Router>


  )
}

export default App;
