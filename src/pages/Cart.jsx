import React from "react";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcements />
            <Wrapper>
                <Title>Your Bag</Title>
                <Top></Top>
                <Bottom></Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

const Container = styled.div``;

const Wrapper = styled.div``;

export default Cart;
