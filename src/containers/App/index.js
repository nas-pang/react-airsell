/* eslint-disable react/require-default-props */
/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';

import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from 'global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  min-height: 100%;
`;

function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Airsells"
        defaultTitle="Airsells - Empowering local businesses"
      >
        <meta name="description" content="Empowering local businesses" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}

export default App;
