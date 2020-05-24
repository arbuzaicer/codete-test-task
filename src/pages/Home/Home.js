import React from 'react';
import styled from 'styled-components';

import MaimImg from '../../assets/images/main-logo.jpg';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 70%;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <h1>There is Home page</h1>
      <p>To get all posts press Posts in NavBar</p>
      <img src={MaimImg} alt="Main Blog logo" />
    </HomeWrapper>
  );
};

export default Home;
