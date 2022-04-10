import React from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImageContainer>
                        {/* <Image src="https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> */}
                        <Image src="https://m.media-amazon.com/images/I/81Iexi2s3RL._UL1500_.jpg" />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>SUMMMER SALE</Title>
                        <Description>Up to 70% off | Clearance store</Description>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlinedIcon />
            </Arrow>
        </Container>
    );
};

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    position: relative;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f0eeee;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;

    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};

    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;

const Wrapper = styled.div`
100%`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
    // display: flex;
    // align-items: center;
    // justify-content: center;
`;

const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 60px;
`;

const Title = styled.h1`
    font-size: 70px;
    font-weight: 600px;
`;

const Description = styled.p`
    font-size: 20px;
    margin: 50px 0;
    letter-spacing: 5px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

export default Slider;
