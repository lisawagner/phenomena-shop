import { LineAxisOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios'
import { popularProducts } from "../../constants/data";
import Product from "./Product";

const Container = styled.div`
    padding: 2px;
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: var(--teal);
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
          )
          setProducts(res.data)
      } catch (error) {}
    }
    getProducts()
  }, [cat])

  useEffect(() => {
    cat &&
    setFilteredProducts(
      products.filter(item => Object.entries(filters).every(([key, value]) =>
        item[key].includes(value)
      ))
    )
  }, [products, cat, filters])

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts(prev =>
        [...prev].sort((a,b) => a.createdAt - b.createdAt )
      )
    } else if ((sort === "asc" )) {
      setFilteredProducts(prev =>
        [...prev].sort((a,b) => a.price - b.price )
      )
    } else {
      setFilteredProducts(prev =>
        [...prev].sort((a,b) => b.price - a.price )
      )
    }
  }, [sort])

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : popularProducts
          .slice(0, 8)
          .map((item) => <Product item={item} key={item.id} />
      )}
      {/* {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))} */}
    </Container>
  );
};

export default Products;
