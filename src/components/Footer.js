import React from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import { Button } from '../components/Button'

const Container = styled.div`
  border-top: 1px solid #dfdfe6;
  padding: 24px 0;
  display: flex;
  justify-content: flex-end;
`;

export const Footer = () => {
  return (
    <Container className="container">
      <div className="navbar-end text-centered">
        <Button small ClickHandler={() => window.location.href="mailto:support@accredible.com?subject=Case Study Submission"} text="Submit a Case Study" />
      </div>
    </Container>
  );
};