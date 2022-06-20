import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
    background-color: #ff7424;
    color: #fff;
    padding: 0.9rem 2rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
`;

const Button = ({ text }) => {
  return (
    <>
      <ButtonComponent>{text}</ButtonComponent>
    </>
  );
};

export default Button;
