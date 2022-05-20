import { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout'
import { useSelector } from 'react-redux'
import { Add, Remove } from "@mui/icons-material";
import { userRequest } from '../requestMethod.js';
import { useNavigate } from 'react-router-dom';

import { Wrapper, Title, Top, TopButton, TopTexts, TopText, Bottom, Info, Product, ProductDetail, Image, Details, ProductName, ProductId, ProductColor, ProductSize, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr, Summary, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice, Button} from './cartStyles.js'



const STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const [stripeToken, setStripeToken] = useState(null)
  const navigate = useNavigate()

  const onToken = (token) => {
    setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        })
        navigate("/success", { data: res.data })
        // console.log("successful payment sent");
      } catch {}
    }
    stripeToken && makeRequest()
  }, [stripeToken, cart.total, navigate])
  

  return (
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">BUY NOW</TopButton>
        </Top>
        <Bottom>
          <Info>

            {cart.products.map( product => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>

                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    ${product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}

            <Hr />
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
              {/* <Button>CHECKOUT NOW</Button> */}
              <StripeCheckout
              name="Phenomena Shop"
              image="https://wikimedia.org/api/rest_v1/media/math/render/svg/c26c105004f30c27aa7c2a9c601550a4183b1f21"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={STRIPE_KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>

  )
}

export default Cart