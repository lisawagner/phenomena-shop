import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@mui/icons-material";
  import styled from "styled-components";
  import { Link } from "react-router-dom";
  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  const Container = styled.div`
    flex: 1;
    margin: 2px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    position: relative;
  
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.1rem 1rem;
    transition: all 0.5s ease;
    &:hover {
      color: white;
      background: var(--teal);
      transform: scale(1.1);
    }
  `;
  
  const Product = ({ item }) => {
    return (
      <Container>
        <Image src={item.img} />
        <Info >
          <Link to="cart">
            <Icon>
              <ShoppingCartOutlined />
            </Icon>
          </Link>

          <Link to="product">
            <Icon>
              <SearchOutlined />
            </Icon>
          </Link>
{/* TODO: favourites list page */}
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
    );
  };
  
  export default Product;
  