/**
 * Test the HomePage
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { HomePage, mapDispatchToProps } from '../index';
import configureStore from '../../../configureStore';

describe('<HomePage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <HomePage loading={false} error={false} />
      </Provider>
    );
    expect(firstChild).toMatchSnapshot();
  });
});
