import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import styled from "styled-components";
import { List, Header } from "semantic-ui-react";
import { Link as LinkNormal } from "react-router-dom";

const StyledFooter = styled.footer`
  padding: 70px 0 0 0;
  background-color: #121212;
  border-top: 1px solid rgba(0, 0, 0, 0.09);
  font-size: 16px;
  color: #fff;
`;

const Copyrights = styled.div`
  color: #aaa;
  border-top: 1px solid rgba(255, 255, 255, 0.09);
  margin-top: 60px;
  text-align: center;
  padding: 30px 0;
  display: inline-block;
  width: 100%;
`;

const Link = styled(LinkNormal)`
  padding: 0 0 9px 0;
  display: inline-block;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  color: #707070;
  line-height: 21px;
  font-size: 14px;
  margin-top: -5px;
`;

const ListIcon = styled(List.Icon)`
  color: #444;
`;

const Footer = props => {
  return (
    <StyledFooter id="footer">
      <Container>
        <Row>
          <Column md={3} sm={3} xs={6}>
            <aside>
              <Header as="h3" color="black" inverted>
                Get Started
              </Header>
              <div>
                <List>
                  <List.Item>
                    <ListIcon name="angle right" />
                    <List.Content>
                      <Link to="/add-listing">Add Listing</Link>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <ListIcon name="angle right" />
                    <List.Content>
                      <Link to="/add-listing">Sample Page</Link>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <ListIcon name="angle right" />
                    <List.Content>
                      <Link to="/add-listing">How it works</Link>
                    </List.Content>
                  </List.Item>
                </List>
              </div>
            </aside>
          </Column>
          <Column md={3} sm={3} xs={6}>
            <aside>
              <Header as="h3" color="black" inverted>
                Top Cities
              </Header>
              <div>
                <List>
                  <List.Item>
                    <ListIcon name="angle right" />
                    <List.Content>
                      <Link to="/add-listing">Charlottetown</Link>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <ListIcon name="angle right" />
                    <List.Content>
                      <Link to="/add-listing">Toronto</Link>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <ListIcon name="angle right" />
                    <List.Content>
                      <Link to="/add-listing">Halifax</Link>
                    </List.Content>
                  </List.Item>
                </List>
              </div>
            </aside>
          </Column>
          <Column md={3} sm={3} xs={6}>
            <aside>
              <Header as="h3" color="black" inverted>
                Learn More
              </Header>
              <div>
                <List>
                  <List.Item>
                    <ListIcon name="angle right" />
                    <List.Content>
                      <Link to="/add-listing">FAQs</Link>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <ListIcon name="angle right" />
                    <List.Content>
                      <Link to="/add-listing">Contact</Link>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <ListIcon name="angle right" />
                    <List.Content>
                      <Link to="/add-listing">Terms of Use</Link>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <ListIcon name="angle right" />
                    <List.Content>
                      <Link to="/add-listing">Privacy Policy</Link>
                    </List.Content>
                  </List.Item>
                </List>
              </div>
            </aside>
          </Column>
          <Column md={3} sm={3} xs={6}>
            <aside>
              <Header as="h3" color="black" inverted>
                Quick Links
              </Header>
              <div>
                <List>
                  <List.Item>
                    <ListIcon name="angle right" />
                    <List.Content>
                      <Link to="/add-listing">My Profile</Link>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <ListIcon name="angle right" />
                    <List.Content>
                      <Link to="/add-listing">My Listings</Link>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <ListIcon name="angle right" />
                    <List.Content>
                      <Link to="/add-listing">Bookmarks</Link>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <ListIcon name="angle right" />
                    <List.Content>
                      <Link to="/add-listing">Add Listing</Link>
                    </List.Content>
                  </List.Item>
                </List>
              </div>
            </aside>
          </Column>
        </Row>
        <Row>
          <Column>
            <Copyrights>© 2019 Airsells Inc. All Rights Reserved.</Copyrights>
          </Column>
        </Row>
      </Container>
    </StyledFooter>
  );
};

Footer.propTypes = {};

export default Footer;
