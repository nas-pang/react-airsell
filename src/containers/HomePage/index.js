import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Column from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import MainContainer from 'components/MainContainer';

import {
  makeSelectRegions,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import Regions from './Regions';
import './HomePage.css';
import AirsellsDigital from './AirsellsDigital';
import ListingsCarousel from './ListingsCarousel';
import { loadRegions } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export const HomePage = ({ regions, loading, error, getRegions }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    getRegions();
  }, []);

  return (
    <MainContainer>
      <Row>
        <Column>
          <Regions regions={regions} loading={loading} />
        </Column>
      </Row>
      <Row>
        <Column>
          <AirsellsDigital />
        </Column>
      </Row>
      <Row>
        <Column>
          <ListingsCarousel
            headline={{ title: 'Digital Marketing' }}
            slug="digital-marketing"
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <ListingsCarousel
            headline={{ title: 'Sales & Writing' }}
            slug="sales-writing"
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <ListingsCarousel
            headline={{ title: 'Training & Courses' }}
            slug="training-courses"
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <ListingsCarousel
            headline={{ title: 'Web Development & Graphics' }}
            slug="web-development-graphics"
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <ListingsCarousel
            headline={{ title: 'Music & Film' }}
            slug="music-film"
          />
        </Column>
      </Row>
    </MainContainer>
  );
};

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  regions: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  getRegions: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  regions: makeSelectRegions(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getRegions: () => dispatch(loadRegions()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(HomePage);
