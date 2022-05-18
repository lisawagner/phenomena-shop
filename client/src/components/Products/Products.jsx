import styled from "styled-components";
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

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
