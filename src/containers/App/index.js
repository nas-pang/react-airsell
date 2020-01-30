/* eslint-disable react/require-default-props */
/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect, memo } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import HomePage from 'containers/HomePage/Loadable';

import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from 'global-styles';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectMenu, makeSelectCategories } from './selectors';
import { loadMenu, loadCategories } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'global';

const AppWrapper = styled.div`
  margin: 0 auto;
  min-height: 100%;
`;

const App = ({ headerMenu, categories, getHeaderMenu, getCategories }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    getHeaderMenu();
  }, []);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Airsells"
        defaultTitle="Airsells - Empowering local businesses"
      >
        <meta name="description" content="Empowering local businesses" />
      </Helmet>
      <Header headerMenu={headerMenu} categories={categories} />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  headerMenu: makeSelectMenu('header-menu'),
  categories: makeSelectCategories(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getHeaderMenu: () => dispatch(loadMenu('header-menu')),
    getCategories: () => dispatch(loadCategories()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(App);
