import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'
import { Button } from './Button'
import { navigate } from 'gatsby'

const BannerContainer = styled.div`
  min-height: 700px;
  display: flex;

  @media (max-width: 767px) {
    min-height: 0;
    flex-direction: column;
  }
`;

const Content = styled.div`
  background-image: linear-gradient(45deg, #282955, #454798);
  width: 50%;
  padding: 48px 72px 48px 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  * {
    color: #ffffff;
    z-index: 1;
    position: relative;
  }

  Button {
    margin-top: 30px;
  }

  p {
    color: hsla(0, 0%, 100%, 0.7);
  }

  @media (max-width: 767px) {
    width: 100%;
    order: 2;
    padding: 48px;
  }
`;

const InnerContent = styled.div`
  width: 482px;
  max-width: 100%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Images = styled.div`
  width: 50%;
  background: #f4f5fa;
  position: relative;
  overflow: hidden;
  background: #000;

  @media (max-width: 767px) {
    width: 100%;
    height: 350px;
    order: 1;
  }
`;

const Image = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all ease 2s;

  &.active {
    opacity: 1;
  }
`;

export const BannerCarousel = ({ title, subheading, images = ['https://assets.website-files.com/5f68558b209a0b8f85194e47/6001d1c8a266bd470d7a9b12_Hero-Background.jpg', 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg'] }) => {
  const [slide, setSlide] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setSlide(slide => {
        if (slide === images.length) {
          return 1;
        } else {
          return slide + 1;
        } 
      });
    }, 5000);
  }, [])

  return (
    <BannerContainer>

      <Content>
        <InnerContent>
          <h1>{title}</h1>
          <p className="text--lg">{subheading}</p>
          <Button ClickHandler={() => navigate('about')} text="Find out more" />
        </InnerContent>
      </Content>

      <Images>
        {images.map((img, i) => (
          <Image key={i} className={i + 1 === slide ? 'active' : ''} img={img}/>
        ))}
      </Images>

    </BannerContainer>
  );
};

BannerCarousel.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string
};