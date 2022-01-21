import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const StyledHeader = styled.header`
  height: 100px;
`;

const StyledContainer = styled.div`
  background-color: var(--color-dark);
  padding: 20px 0;
  color: var(--color-white);
  display: grid;
  place-items: center;
  gap: 10px;
`;

const StyledNavigator = styled.nav`
  display: flex;
  gap: 20px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <h1>Reto Fullstack Ripley</h1>
        <StyledNavigator>
          <Link to="/create"><Button text="Añadir a un cliente" /></Link>
          <Link to="/"><Button text="Lista de clientes" /></Link>
        </StyledNavigator>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header;