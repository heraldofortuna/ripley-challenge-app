import React from "react";
import styled from "styled-components";

const Button = ({ text, type }) => {
  const StyledButton = styled.button`
    background-color: var(--color-purple);
    font-size: 16px;
    color: var(--color-white);
    border: 1px solid var(--color-white);
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
    transition: 0.4s all;

    :hover {
      background-color: var(--color-white);
      color: var(--color-purple);
    }
  `;

  return (
    <StyledButton type={type}>{ text }</StyledButton>
  )
}

export default Button;