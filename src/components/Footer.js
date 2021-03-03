import React from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'

const Container = styled.div`
  padding: 0 24px;

  .footer-inner--container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    border-top: 1px solid #dfdfe6;
    padding: 24px 0;
  }
`;

export const Footer = () => {
  return (
    <Container className="container">
      <div className="footer-inner--container text-centered">
        <Button small ClickHandler={() => window.location.href="mailto:support@accredible.com?subject=Case Study Submission"} text="Submit a Case Study" />
      </div>
    </Container>
  );
};