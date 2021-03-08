import React from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'

const Container = styled.div`
  padding: 0 24px;

  .footer-inner--container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid #dfdfe6;
    padding: 32px 0;
  }

  .table__heading {
    height: 50px;
  }

  .footer--button-container {
    @media (max-width: 767px) {
      margin-left: 24px;
    }
  }
`

const TextColumn = styled.div`
  padding: 0 24px;

  @media (max-width: 767px) {
    margin-bottom: 24px;
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

  .footer__address {
    color: rgba(40, 41, 85, 0.65);
    font-size: 15px;
    line-height: 20px;
    text-decoration: none;
    margin: 12px 0;
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
          <div className="table__heading">
            <img class="footer__image" src="https://assets.website-files.com/5f68558b209a0b8f85194e47/5f686b7a96b43fd11da99f61_Accredible%20Dark.svg" alt="footer-logo" />
          </div>
          <div className="links">
            <p class="footer__address">800 West El Camino Real, Suite 180, <br />Accredible, Mountain View, CA, 94040</p>
            <a class="footer__link" rel="noopener noreferrer" href="https://www.accredible.com/privacy-policy/">Privacy Policy</a>
            <a class="footer__link" rel="noopener noreferrer" href="https://help.accredible.com/accessibility">Accessibility</a>
            <a class="footer__link" rel="noopener noreferrer" href="https://www.accredible.com/terms">Terms of Service</a>
          </div>
        </TextColumn>
        <TextColumn>
          <div className="table__heading">
            <p class="footer__title">More Digital Credential Resources</p>
          </div>
          <div className="links">
            <a class="footer__link" rel="noopener noreferrer" href="https://www.accredible.com/badge-designer">Badge Designer</a>
            <a class="footer__link" rel="noopener noreferrer" href="https://www.accredible.com/videos">Videos</a>
            <a class="footer__link" rel="noopener noreferrer" href="https://www.accredible.com/webinar">Webinars</a>
            <a class="footer__link" rel="noopener noreferrer" href="https://www.accredible.com/downloadable-assets">Guides & Checklists</a>
            <a class="footer__link" rel="noopener noreferrer" href="https://www.accredible.com/solutions/digital-credentials">What is a Credential?</a>
          </div>
        </TextColumn>
        <div className="table__heading footer--button-container">
          <Button className="footer__button" small transparent ClickHandler={() => (window.location.href = 'mailto:support@accredible.com?subject=Case Study Submission')} text="Submit a Case Study" />
        </div>
      </div>
    </Container>
  )
}
