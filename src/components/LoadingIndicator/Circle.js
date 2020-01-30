import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
`;

const Circle = () => {
  const CirclePrimitive = styled.div`
    border-radius: 50%;
    width: 22px;
    height: 22px;
    border: 0.3rem solid rgba(255, 255, 255, 0.2);
    border-top-color: white;
    -webkit-animation: spin 1s infinite linear;
    animation: ${spin} 1s infinite linear;
    top: 13px;
    position: absolute;
    left: 13px;
    transform: translate(-50%, -50%);
  `;
  return <CirclePrimitive />;
};

export default Circle;
