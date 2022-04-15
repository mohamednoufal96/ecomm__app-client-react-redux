import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import { mobileDevice } from "../responsive";
import Product from "./Product";

const Products = () => {
    return (
        <Container>
            {popularProducts.map((item) => (
                <Product key={item.id} item={item} />
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
`;

export default Products;
