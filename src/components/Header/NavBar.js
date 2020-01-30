/* global google */

import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Input, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Geosuggest from 'react-geosuggest';

import NormalImg from 'components/Img';
import AirsellsLogoWhite from './airsells-white.png';
import './geosuggest.css';

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
  min-height: 32px;

  ${breakpoint('md')`
    overflow-x: inherit;
  `}
`;

export const Nav = ({ menu }) => {
  const { items } = menu || {};
  return (
    <NavStyled id="navigation" role="navigation">
      {items &&
        items.map(item => (
          <NavLink
            key={`menu-${item.ID}`}
            to={`/listing-category/${item.post_name}`}
          >
            {item.title}
          </NavLink>
        ))}
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

  .menu {
    min-width: max-content !important;
  }

  ${breakpoint('md')`
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    display: flex !important;
  `}
`;

const getOptions = categories => {
  const options = [{ key: 'all', text: 'All Categories', value: 'all' }];

  if (categories) {
    categories.forEach(item =>
      options.push({
        key: item.slug,
        text: item.name.replace('&amp;', '&'),
        value: item.id,
      })
    );
  }

  return options;
};

export const MainSearch = ({ categories }) => {
  const options = getOptions(categories);

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
          <Geosuggest
            placeholder="Location"
            className="ui input"
            country="CA"
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
