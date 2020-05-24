import React from 'react';
import styled from 'styled-components';

const PreloaderWrapper = styled.div`  
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
  div {
    position: absolute;
    border: 4px solid #3f51b5;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

const Preloader = () => (
  <PreloaderWrapper className="lds-ripple">
    <div></div>
    <div></div>
  </PreloaderWrapper>
);

export default Preloader;
