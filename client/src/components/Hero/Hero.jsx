import { Link } from 'react-router-dom';
import { sliderItems } from "../../constants/data";

import { Container, Wrapper, Slide, SlideWrapper, ImgContainer, Image, InfoContainer, Title, Desc, Button } from './heroStyles'

const Hero = () => {
  return (
    <Container>

        <Wrapper>
        {sliderItems.map( (item) => (
            (item.id == "1") ? 
                <Slide bg={item.bg} key={item.id}>
                    <SlideWrapper>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Link to="products">
                                <Button>{item.btn}</Button>
                            </Link>
                        </InfoContainer>
                    </SlideWrapper>
                </Slide> : ""
            ) )}
        </Wrapper>

    </Container>
    )
}

export default Hero