import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Swiper from 'react-id-swiper';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import { createStructuredSelector } from 'reselect';

import './swiper.css';
import ListingCard from 'components/ListingCard';
import Headline from 'components/Headline';
import ListingCardPlaceholder from 'components/ListingCard/Placeholder';
import { makeSelectCategories } from 'containers/App/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectListings } from './selectors';
import { loadListing } from './actions';
// import { categories } from './data';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

const carouselParams = {
  slidesPerView: 4,
  spaceBetween: 10,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
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

const getCategoryListing = (categories, slug) => {
  if (!categories) return {};
  return categories.find(c => c.slug === slug) || {};
};

const ListingsCarousel = ({
  headline,
  slug,
  listings,
  getListingsByCategory,
  categories,
}) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [id, setID] = React.useState(null);

  useEffect(() => {
    const category = getCategoryListing(categories, slug);
    const { id } = category;

    if (id) {
      setID(id);
    }
  }, [categories]);

  useEffect(() => {
    if (id) getListingsByCategory(id);
  }, [id]);

  const { items, loading } = listings[id] || { items: [] };

  return (
    <>
      <Row>
        <Column>
          <Headline
            title={headline.title}
            subtitle={headline.subtitle}
            marginTop={35}
          />
        </Column>
      </Row>
      {loading && (
        <Swiper {...carouselParams}>
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
      {!loading && items && (
        <Row>
          <Column>
            <Swiper {...carouselParams}>
              {items.map(list => (
                <div key={list.slug}>
                  <ListingCard
                    link={`listing/${list.slug}`}
                    name={list.title.rendered}
                    address={list._address}
                    priceMax={list._price_max}
                    priceMin={list._price_min}
                    _cover={list.thumbnail}
                  />
                </div>
              ))}
            </Swiper>
          </Column>
        </Row>
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  listings: makeSelectListings(),
  categories: makeSelectCategories(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getListingsByCategory: slug => dispatch(loadListing(slug)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ListingsCarousel);
