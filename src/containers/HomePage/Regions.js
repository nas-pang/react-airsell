import React from 'react';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import Swiper from 'react-id-swiper';

import Headline from 'components/Headline';
import ListingCard from 'components/ListingCard';
import ListingCardPlaceholder from 'components/ListingCard/Placeholder';

// import { regions } from './data';

const Regions = ({ regions, loading }) => {
  const params = {
    slidesPerView: 4,
    spaceBetween: 10,
    freeMode: true,
    dragabble: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  };

  return (
    <>
      <Row>
        <Column>
          <Headline
            title="Explore Regions"
            subtitle="Find services nearby, or explore other services across Canada"
            marginTop={15}
            marginBottom={20}
          />
        </Column>
      </Row>
      {loading && (
        <Swiper {...params}>
          <div>
            <ListingCardPlaceholder />
          </div>
          <div>
            <ListingCardPlaceholder />
          </div>
          <div>
            <ListingCardPlaceholder />
          </div>
          <div>
            <ListingCardPlaceholder />
          </div>
        </Swiper>
      )}
      {!loading && regions && (
        <Swiper {...params}>
          {regions.map(region => (
            <div key={region.id}>
              <ListingCard
                link={`${region.taxonomy}/${region.slug}`}
                name={region.name}
                _cover={region.cover}
              />
            </div>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Regions;
