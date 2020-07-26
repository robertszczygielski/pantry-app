import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Home } from './Home';
import { AddProduct } from '../products/AddProduct';
import { AllProducts } from '../products/AllProducts';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Routing: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link>
                <StyledLink to="/">Home</StyledLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <StyledLink to="/add">Add Product</StyledLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <StyledLink to="/show">Show all products</StyledLink>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/show">
            <AllProducts />
          </Route>
          <Route path="/add">
            <AddProduct />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
