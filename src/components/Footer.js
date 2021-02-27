import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FooterBar = styled.div`
  background: grey;
  width: 100%;
`;

export const Footer = ({ title }) => {
  return (
    <FooterBar>{title}</FooterBar>
  );
};

Footer.propTypes = {
  title: PropTypes.string
};