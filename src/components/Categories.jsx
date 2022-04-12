import styled from "styled-components";
import React from "react";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
    return (
        <Container>
            {categories.map((item) => (
                <CategoryItem key={item.id} item={item} />
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-beteen;
    padding: 24px;
    height: 70vh;
`;

export default Categories;
