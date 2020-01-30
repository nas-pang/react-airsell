import React from 'react';
import ContentLoader from 'react-content-loader';

const ListingCardPlaceholder = () => {
  return (
    <ContentLoader
      height={250}
      width={270}
      speed={1.5}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="0" y="0" rx="5" ry="5" width="270" height="190" />
      <rect x="0" y="200" rx="0" ry="0" width="120" height="17" />
    </ContentLoader>
  );
};

export default ListingCardPlaceholder;
