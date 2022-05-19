import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { publicRequest } from '../requestMethod';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux'

import { Add, Remove } from "@mui/icons-material";
import { Wrapper, ImgContainer, Image, InfoContainer, Title, Desc, Price, FilterContainer, Filter, FilterTitle, FilterColor, FilterSize, FilterSizeOption, AddContainer, AmountContainer, Amount, Button } from './singleProductStyles';


const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id)
        setProduct(res.data)
      } catch (error) {
        console.log("There is an error in singleProduct page data get method");
      }
    }
    getProduct()
  }, [id])

  const handleQuantity = (type) => {
    if(type === "dec") {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleAddToCart = () => {
    //update cart
    dispatch(addProduct({ ...product, quantity, color, size }))
  }


  return (
      <Wrapper>
        <ImgContainer>
          {/* <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" /> */}
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          {/* <Title>Denim Jumpsuit</Title> */}
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          {/* <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc> */}
          {/* <Price>$20</Price> */}
          <Price>${product.price}</Price>
          <FilterContainer>

            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.colour?.map( (c) => (
                <FilterColor color={c} key={c} onClick={ () => setColor(c) } />
              ) )}
              {/* <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" /> */}
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={ (e) => setSize(e.target.value) }>
              {product.size?.map( (s) => (
                <FilterSizeOption key={s}>{s}</FilterSizeOption>
              ) )}
                {/* <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption> */}
              </FilterSize>
            </Filter>

          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove onClick={ () => handleQuantity("dec") } />
              {/* <Amount>1</Amount> */}
              <Amount>{quantity}</Amount>
              <Add onClick={ () => handleQuantity("inc") } />
            </AmountContainer>
            <Button onClick={handleAddToCart}>ADD TO CART</Button>
          </AddContainer>
          
        </InfoContainer>
      </Wrapper>
  )
}

export default SingleProduct