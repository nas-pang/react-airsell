import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import coverPlaceholder from 'images/listeo_placeholder.png';

const ListingItemContainer = styled(Link)`
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  transform: translate3d(0, 0, 0);
  transition: transform 0.3s;
  margin-bottom: 30px;

  &:hover {
    transform: translate3d(0, -3px, 0);
  }
`;

const ListingItem = styled.div`
  background: #f3f3f3;
  border-radius: 4px 4px 0 0;
  height: 100%;
  display: block;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  height: 190px;
  z-index: 100;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 10px;
`;

const LinstingItemImg = styled(LazyLoadImage)`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 6px;
`;

const Name = styled.h3`
  font-weight: 400;
  font-size: 16px;
  color: #333;
  line-height: 1.1;
  margin-bottom: 4px;
`;

const Address = styled.span`
  font-size: 12px;
  color: #707174;
  line-height: 18px;
  display: block;
`;

const Price = styled.span`
  font-size: 16px;
  display: block;
  color: #333;
  font-weight: 600;
`;

const ListingCard = ({ link, _cover, name, address, priceMax, priceMin }) => {
  return (
    <ListingItemContainer to={link}>
      <ListingItem>
        <LinstingItemImg src={_cover || coverPlaceholder} alt={name} />
      </ListingItem>
      <div>
        <Name>{name}</Name>
        {address && <Address>{address}</Address>}
        {priceMax && priceMin && (
          <Price>{`C$${priceMax} - C$${priceMin}`}</Price>
        )}
        {priceMax && !priceMin && <Price>C${priceMax}</Price>}
        {!priceMax && priceMin && <Price>C${priceMin}</Price>}
      </div>
    </ListingItemContainer>
  );
};

export default ListingCard;
