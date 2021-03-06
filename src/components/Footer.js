import React from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'

const Container = styled.div`
  padding: 0 24px;

  .footer-inner--container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid #dfdfe6;
    padding: 24px 0;
  }
`

const TextColumn = styled.div`
  padding: 0 24px;

  .footer-inner--container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid #dfdfe6;
    padding: 24px 0;
  }

  .links {
    display: flex;
    flex-direction: column;
  }

  .footer__title {
    margin-top: 0px;
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 26px;
    font-weight: 700;
  }

  .footer__image {
    margin-bottom: 15px;
  }

  .footer__button {

  }

  .footer__address {
    color: rgba(40, 41, 85, 0.65);
    font-size: 15px;
    line-height: 20px;
    text-decoration: none;
    margin-bottom: 5px;
  }

  .footer__link {
    color: rgba(40, 41, 85, 0.65);
    font-size: 15px;
    line-height: 28px;
    text-decoration: none;
    margin-bottom: 5px;

    &:hover {
      color: #282955;
    }
  }
`

export const Footer = () => {
  return (
    <Container className="container">
      <div className="footer-inner--container text-centered">
        <TextColumn>
          <img class="footer__image" src="https://assets.website-files.com/5f68558b209a0b8f85194e47/5f686b7a96b43fd11da99f61_Accredible%20Dark.svg" alt="footer-logo" />
          <div className="links">
            <p class="footer__address">800 West El Camino Real,<br />Suite 180, <br />Accredible,<br />Mountain View,<br />CA, 94040</p>
            <a class="footer__link" href="">Privacy Policy</a>
            <a class="footer__link" href="">Accessibility</a>
            <a class="footer__link" href="">Terms of Service</a>
          </div>
        </TextColumn>
        <TextColumn>
          <p class="footer__title">More Digital Credential Resources</p>
        <div className="links">
            <a class="footer__link" href="">Badge Designer</a>
            <a class="footer__link" href="">Videos</a>
            <a class="footer__link" href="">Webinars</a>
            <a class="footer__link" href="">Guides & Checklists</a>
            <a class="footer__link" href="">What is a Credential?</a>
          </div>
        </TextColumn>
        <Button
          small
          transparent
          ClickHandler={() =>
            (window.location.href =
              'mailto:support@accredible.com?subject=Case Study Submission')
          }
          text="Submit a Case Study"
        />
      </div>
    </Container>
  )
}
