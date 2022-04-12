import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favorite products.</Description>
            <InputContainer>
                <Input placeholder="Your Email" />
                <Button>
                    <SendIcon />
                </Button>
            </InputContainer>
        </Container>
    );
};

const Container = styled.div`
    height: 60vh;
    background-color: #f5f5f4f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid lightgray;
`;
const Input = styled.input`
    flex: 8;
    border: none;
    outline: none;
    padding-left: 20px;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background: teal;
    color: white;
    height: 100%;
    cursor: pointer;
`;

export default Newsletter;
