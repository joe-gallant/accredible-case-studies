import React, {useState} from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/accredible-logo.svg'
import styled from 'styled-components'

const Navigation = styled.div`
  min-height: 52px;
  align-items: stretch;
  display: flex;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 80px;

  .navbar-logo {
    align-items: center;
    display: flex;
    align-items: stretch;

    @media (max-width: 767px) {
      width: 100%;
      justify-content: space-between;
    }

    img {
      width: 182px
    }
  }

  .navbar-menu {
    align-items: stretch;
    display: flex;
    width: 100%;
    margin-left: 75px;

    @media (max-width: 767px) {
      display: none;
    }
  }

  .navbar-start {
    justify-content: flex-start;
    margin-right: auto;
    align-items: stretch;
    display: flex;
  }

  .navbar-end {
    justify-content: flex-start;
    margin-left: auto;
    align-items: stretch;
    display: flex;
  }

  .navbar-item {
    display: flex;
    align-items: center;

    &:nth-of-type(2) {
      margin-left: 35px;
    }

    img {
      max-height: 1.75rem;
    }
  }
`;

const Burger = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  color: #4a4a4a;
  cursor: pointer;
  display: block;
  height: 3.25rem;
  position: relative;
  width: 3.25rem;
  margin-left: auto;
  border: 1px solid #dfdfe6;
  border-radius: 4px;
  background-color: ${props => props.active ? '#454798' : '#fff'};

  &:focus {
    outline: none;
  }

  span {
    background-color: ${props => props.active ? '#fff' : '#454798'};
    display: block;
    height: 2px;
    left: calc(50% - 8px);
    position: absolute;
    transform-origin: center;
    transition-duration: 86ms;
    transition-property: background-color,opacity,transform;
    transition-timing-function: ease-out;
    width: 16px;

    &:first-child {
      top: calc(50% - 6px);
    }
    &:nth-of-type(2) {
      top: calc(50% - 1px);
    }
    &:nth-of-type(3) {
      top: calc(50% + 4px);
    }
  }
`;

const Navbar = () => {

  const [active, openNav] = useState(false);

  const toggleHamburger = () => {
    // toggle the active boolean in the state
    if (active) {
      openNav(false);
    } else {
      openNav(true);
    }
  }

    return (
      <Navigation
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <Container className="container">
          <div className="navbar-logo">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Logo" />
            </Link>
            {/* Hamburger menu */}
            <Burger
              className={`navbar-burger burger`}
              data-target="navMenu"
              onClick={() => toggleHamburger()}
              onKeyDown={() => toggleHamburger()}
              role="button"
              tabIndex={0}
              active={active}
            >
              <span />
              <span />
              <span />
            </Burger>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/case-studies">
                Case studies
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </Container>
      </Navigation>
    )
  }


export default Navbar
