import React from 'react';
import Headline from 'components/Headline';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import { Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import airsellsDigital from 'images/airsells-digital.jpg';

const ColTitle = styled(Column)`
  padding-right: 0;
  padding-left: 0;
  flex: 0.4;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  margin-left: 15px;

  > div {
    padding-right: 45px;
    padding-left: 30px;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  line-height: 56px;
  font-weight: 400;
  margin-bottom: 35px;
`;

const ColImage = styled(Column)`
  flex: 0.6;
  padding-left: 0;
  align-items: stretch;
  min-height: 295px;
`;

const Img = styled.div`
  background-image: url("${airsellsDigital}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const AirsellsDigital = () => {
  return (
    <>
      <Row>
        <Column>
          <Headline title="Introducing Airsells Digital" />
        </Column>
      </Row>
      <Row>
        <ColTitle>
          <div>
            <Title>
              Our own unique
              <br /> Professional Services
              <br /> Brand
            </Title>
            <Button as="a" icon labelPosition="right">
              Explore Airsells Digital
              <Icon name="right arrow" />
            </Button>
            {/* <Link to="/listings/"> </Link> */}
          </div>
        </ColTitle>
        <ColImage>
          <Img />
        </ColImage>
      </Row>
    </>
  );
};

export default AirsellsDigital;
