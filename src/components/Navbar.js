import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import styled from 'styled-components'

const Navigation = styled.div`
  min-height: 52px;
  align-items: stretch;
  display: flex;
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  .navbar-logo {
    min-height: 56px;
    align-items: center;
    display: flex;
  }

  .navbar-menu {
    align-items: stretch;
    display: flex;
    width: 100%;
    margin-left: 75px
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

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <Navigation
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <Container className="container">
          <div className="navbar-logo">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            {/* <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}
              role="button"
              tabIndex={0}
            >
              <span />
              <span />
              <span />
            </div> */}
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
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
}

export default Navbar
