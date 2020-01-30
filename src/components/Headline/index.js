import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

const Headline = ({
  as = 'h2',
  title,
  subtitle,
  marginTop,
  marginBottom = 20,
}) => {
  return (
    <Header as={as} style={{ marginTop, marginBottom }}>
      {title}
      {subtitle && <Header.Subheader as="span">{subtitle}</Header.Subheader>}
    </Header>
  );
};

Headline.propTypes = {
  as: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Headline;
