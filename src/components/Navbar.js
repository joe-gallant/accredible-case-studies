import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
import logo from '../img/badgecasestudy.png'
import styled from 'styled-components'
import { Button } from '../components/Button'

const Navigation = styled.div`
  min-height: 52px;
  display: block;
  position: fixed;
  top: 0;
  z-index: 200;
  background-color: #fff;
  width: 100%;
  box-shadow: 0 0 12px 0 rgb(40 41 85 / 16%);
}
`

const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 80px;

  .navbar-logo {
    align-items: center;
    display: flex;

    &:hover {
      img {
        opacity: 0.7;
      }
    }

    @media (max-width: 767px) {
      width: 100%;
      justify-content: space-between;
    }

    img {
      width: 182px;
    }
  }

  .navbar-menu {
    align-items: stretch;
    display: flex;
    width: 100%;
    margin-left: 45px;

    @media (max-width: 767px) {
      display: none;
    }

    .text-centered {
      text-align: center;
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
    color: rgba(40, 41, 85, 0.8);
    padding: 4px 8px;

    &:hover {
      background-color: #e4f0fb;
      colour: rgba(40, 41, 85, 0.65);
    }

    &:nth-of-type(2) {
      margin-left: 24px;
    }

    img {
      max-height: 1.75rem;
    }

    &.active {
      background-color: #e4f0fb;
      colour: rgba(40, 41, 85, 0.65);
    }
  }
`

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
  background-color: ${(props) => (props.active ? '#454798' : '#fff')};

  &:focus {
    outline: none;
  }

  span {
    background-color: ${(props) => (props.active ? '#fff' : '#454798')};
    display: block;
    height: 2px;
    left: calc(50% - 8px);
    position: absolute;
    transform-origin: center;
    transition-duration: 86ms;
    transition-property: background-color, opacity, transform;
    transition-timing-function: ease-out;
    width: 16px;

    &:first-child {
      top: calc(50% - 6px);
      transform: ${(props) =>
        props.active ? 'translateY(5px) rotate(45deg)' : 'none'};
    }
    &:nth-of-type(2) {
      top: calc(50% - 1px);
      opacity: ${(props) => (props.active ? '0' : '1')};
    }
    &:nth-of-type(3) {
      top: calc(50% + 4px);
      transform: ${(props) =>
        props.active ? 'translateY(-5px) rotate(-45deg)' : 'none'};
    }
  }
`

const MobileNavOptions = styled.div`
  padding: 12px;

  @media (min-width: 768px) {
    display: none;
  }

  .navbar-item {
    display: block;
    text-align: center;
    margin-bottom: 24px;
    color: rgba(40, 41, 85, 0.8);

    img {
      max-height: 1.75rem;
    }
  }

  .navbar-end {
    align-items: center;
    justify-content: center;
    display: flex;
  }
`

const Navbar = () => {
  const [active, openNav] = useState(false)

  const toggleHamburger = () => {
    // toggle the active boolean in the state
    if (active) {
      openNav(false)
    } else {
      openNav(true)
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
          <Link to="/" title="Logo">
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
        <div id="navMenu" className={`navbar-menu`}>
          <div className="navbar-start">
            <Link
              className={`navbar-item ${
                typeof window !== 'undefined' &&
                window.location.pathname === '/about'
                  ? 'active'
                  : ''
              }`}
              to="/about"
            >
              About
            </Link>
            <Link
              className={`navbar-item ${
                typeof window !== 'undefined' &&
                window.location.pathname === '/case-studies'
                  ? 'active'
                  : ''
              }`}
              to="/case-studies"
            >
              Case studies
            </Link>
          </div>
          <div className="navbar-end text-centered">
            <Button
              small
              ClickHandler={() => navigate('/')}
              text="Subscribe for Updates"
            />
          </div>
        </div>
      </Container>
      {active && (
        <MobileNavOptions>
          <div className="navbar-start">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/case-studies">
              Case studies
            </Link>
          </div>
          <div className="navbar-end">
            <Button
              small
              ClickHandler={() => navigate('/')}
              text="Subscribe for Updates"
            />
          </div>
        </MobileNavOptions>
      )}
    </Navigation>
  )
}

export default Navbar
