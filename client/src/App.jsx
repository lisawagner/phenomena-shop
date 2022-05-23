import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import ProductsPage from "./pages/ProductsPage";
import Register from "./pages/Register";
import Success from "./pages/Success";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate, 
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import { useSelector } from "react-redux";


const App = () => {
  const user = useSelector(state => state.user.currentUser)
  
  return (
    <Router>
      {/* <Layout> */}
        <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/products" element={<ProductsPage />} /> */}
            <Route path="/products/:category" element={<ProductsPage />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<Success />} />
            <Route path="/login" element={user ? <Navigate to="/"/> : <Login />}/>
            {/* <Route path="/login" element={<Login />}/> */}
            <Route path="/register" element={user ? <Navigate to="/"/> : <Register />}/>
            {/* <Route path="/register" element={<Register />} /> */}
          </Route>
        </Routes>
      {/* </Layout> */}
    </Router>


  )
}

export default App;
