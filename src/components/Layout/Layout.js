import React from 'react';
import styled from 'styled-components';

import Navbar from '../Navbar';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background:#ccc;
  min-height: 100vh;
`;

const Layout = (props) => (
  <LayoutWrapper>
    <Navbar />
    <div className="content">{props.children}</div>
  </LayoutWrapper>
);

export default Layout;
