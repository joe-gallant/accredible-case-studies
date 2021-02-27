import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BannerContainer = styled.div`
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background-color: #282955;
  background-image: linear-gradient(45deg, #282955, #454798);
  width: 50%;
  padding: 48px;
  flex: 1;
  display: flex;
  flex-direction: column;

  * {
    color: #ffffff;
    z-index: 1;
    position: relative;
  }
`;

const Images = styled.div`
  width: 50%;
  background: #f4f5fa;
  flex: 1;
`;

export const BannerCarousel = ({ title, subheading }) => {

  return (
    <BannerContainer>

      <Content>
        <h1 class="h1--big">{title}</h1>
        <p class="text--lg">{subheading}</p>
      </Content>

      <Images></Images>
      
    </BannerContainer>
  );
};

BannerCarousel.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string
};