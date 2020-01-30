import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Input, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import NormalImg from 'components/Img';
import AirsellsLogoWhite from './airsells-white.png';

const LinkBrand = styled(Link)`
  display: inline-block;
`;

const Img = styled(NormalImg)`
  width: 100%;
  margin: 0 auto;
  display: block;
`;

export const Brand = () => {
  return (
    <LinkBrand to="/">
      <Img
        src={AirsellsLogoWhite}
        alt="Airsells - Empowering local businesses"
      />
    </LinkBrand>
  );
};

const NavLink = styled(Link)`
  padding: 6px 7px;
  color: hsla(0, 0%, 100%, 0.5);
  line-height: 20px;
  font-weight: 500;
  font-size: 13px;
  transition: 0.4s;
  display: block;
  margin: 0 3px;
  white-space: nowrap;

  &:hover {
    color: #fff;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.06);
  }
`;

const NavStyled = styled.nav`
  flex-direction: row;
  display: flex;
  margin: 4px 0;
  margin-left: -10px;
  overflow-x: scroll;

  ${breakpoint('md')`
    overflow-x: inherit;
  `}
`;

export const Nav = () => {
  return (
    <NavStyled id="navigation" role="navigation">
      <NavLink to="/listing-category/beauty-spas">Beauty & Spas</NavLink>
      <NavLink to="/listing-category/beauty-spas">
        Professional Services
      </NavLink>
      <NavLink to="/listing-category/beauty-spas">
        Home & Local Services
      </NavLink>
      <NavLink to="/listing-category/beauty-spas">
        Events & Entertainment
      </NavLink>
      <NavLink to="/listing-category/beauty-spas">Food & Farming</NavLink>
      <NavLink to="/listing-category/beauty-spas">Training & Courses</NavLink>
    </NavStyled>
  );
};

const MainSearchInput = styled.div`
  margin: 10px 0 !important;
  background: none;
  box-shadow: none;
  display: flex;

  ${breakpoint('md')`
    margin: 0 auto !important;
  `}
`;

const MainSearchInputItem = styled.div`
  display: flex;
`;

const StyledDropdown = styled(Dropdown)`
  border-right: 0 !important;
  background: #f5f5f5 !important;
  display: none !important;

  > .text {
    color: #888;
  }

  ${breakpoint('md')`
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    display: flex !important;
  `}
`;

export const MainSearch = () => {
  const options = [
    { key: 'all', text: 'All Categories', value: 'all' },
    { key: 'beauty-spas', text: 'Beauty & Spas', value: 'beauty-spas' },
    {
      key: 'professional-services',
      text: 'Professional Services',
      value: 'professional-services',
    },
    {
      key: 'home-local-services',
      text: 'Professional Services',
      value: 'home-local-services',
    },
    {
      key: 'events-entertainment',
      text: 'Events & Entertainment',
      value: 'events-entertainment',
    },
    {
      key: 'food-farming',
      text: 'Food & Farming',
      value: 'food-farming',
    },
    {
      key: 'training-courses',
      text: 'Training & Courses',
      value: 'training-courses',
    },
  ];

  return (
    <MainSearchInput>
      <MainSearchInputItem>
        <StyledDropdown
          floating
          compact
          selection
          options={options}
          placeholder="All"
        />
      </MainSearchInputItem>
      <MainSearchInputItem style={{ flex: 2 }}>
        <Input
          type="text"
          iconPosition="left"
          name="keyword_search"
          placeholder="What are you looking for?"
          action
          fluid
          style={{ flex: 1 }}
        >
          <Icon name="search" />
          <input
            style={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
          />
        </Input>
      </MainSearchInputItem>
      <MainSearchInputItem style={{ flex: 1 }}>
        <Input
          type="text"
          iconPosition="left"
          name="location"
          placeholder="Location"
          action
          fluid
          style={{ flex: 1 }}
        >
          <Icon name="map marker alternate" />
          <input
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          />
          <Button type="submit" icon="search" />
        </Input>
      </MainSearchInputItem>
    </MainSearchInput>
  );
};

export const UserMenu = () => {
  return (
    <div className="d-flex justify-content-end">
      <Button icon labelPosition="left">
        <Icon name="sign-in" />
        Sign In
      </Button>
    </div>
  );
};
