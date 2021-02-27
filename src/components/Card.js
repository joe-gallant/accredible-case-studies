import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import { Button } from './Button'

const CardContainer = styled.div`
  background: #ffffff;
  width: 100%;
  display: flex;
  min-height: 320px;
  border: 1px solid #e4f0fb;
  border-radius: 8px;
  box-shadow: 0px 0px 10px -5px #000;
  margin-bottom: 24px;
  overflow: hidden;

  p {
    font-size: 16px;
    margin: 0;
  }
`;

const Content = styled.div`
  width: 50%;
  height: 100%;
  padding: 24px;

  span {
    color: #5557cd;
  }

  Button {
    margin-top: 24px;
  }
`;

const Image = styled.div`
  width: 50%;
  flex: 1;
  background: #f4f5fa;
  background-image: ${props => props.img ? `url(${props.img})` : 'url()' };
  background-size: cover;
`;

export const Card = ({ image, slug, title, author, date, topics = [] }) => {
  return (
    <CardContainer>

      <Image img={image}></Image>
      <Content>
        {title && <h3 className="text--lg">{title}</h3>}
        {author && <p>Author: <span>{author}</span></p>}
        {date && <p>Date: <span>{date}</span></p>}
        {topics && topics.length > 0 && <p>Topics: <span>{topics.join(', ')}</span></p>}
        {slug && <Button ClickHandler={() => navigate(slug)} small text='Read Case Study' />}
      </Content>
      
    </CardContainer>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  slug: PropTypes.string
};