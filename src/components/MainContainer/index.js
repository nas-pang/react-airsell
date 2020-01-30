import React from 'react';
import DefaultContainer from 'react-bootstrap/Container';
import styled from 'styled-components';

const Container = styled(DefaultContainer)`
  margin-top: 104px;
  margin-bottom: 30px;
  padding-top: 30px;
`;

const MainContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
