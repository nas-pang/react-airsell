import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import capitalize from 'utils/capitalize';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';

import StyledHeader from './StyledHeader';
import * as Navbar from './NavBar';

const Header = ({ position = 'fixed', headerMenu, categories }) => {
  return (
    <StyledHeader
      id="header-container"
      className={clsx('root', `position${capitalize(position)}`)}
    >
      <Container fluid>
        <Row style={{ marginTop: '15px' }}>
          <Column
            xl={{ span: 2, order: 0 }}
            lg={{ span: 2, order: 0 }}
            xs={{ span: 6, order: 0 }}
          >
            <Navbar.Brand />
          </Column>
          <Column
            xl={{ span: 8, order: 1 }}
            lg={{ span: 8, order: 1 }}
            xs={{ order: 2 }}
          >
            <Navbar.MainSearch categories={categories} />
          </Column>
          <Column
            xl={{ span: 2, order: 2 }}
            lg={{ span: 2, order: 2 }}
            xs={{ span: 6, order: 1 }}
          >
            <Navbar.UserMenu />
          </Column>
        </Row>
        <Row>
          <Column xl={{ offset: 2 }}>
            <Navbar.Nav menu={headerMenu} />
          </Column>
        </Row>
      </Container>
    </StyledHeader>
  );
};

Header.propTypes = {
  position: PropTypes.oneOf([
    'absolute',
    'fixed',
    'relative',
    'static',
    'sticky',
  ]),
  headerMenu: PropTypes.object,
  categories: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

export default memo(Header);
