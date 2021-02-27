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
  max-width: 360px;
  border: 1px solid #e4f0fb;
  border-radius: 8px;
  box-shadow: 0px 0px 10px -5px #000;
  margin-right: 24px;
  margin-bottom: 24px;

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
  background-image: ${props => props.img ? `url(${props.img})` : 'url()' }
`;

export const Card = ({ image = './src/img/case-study-placeholder.png', slug = 'test', title = 'Case study title', author = 'Accredible', date = '29/01/21', topics = ['Topic 1', 'Topic 2'] }) => {
  return (
    <CardContainer>

      <Image img={image}></Image>
      <Content>
        <h3>{title}</h3>
        <p>Author: <span>{author}</span></p>
        <p>Date: <span>{date}</span></p>
        <p>Topics: <span>{topics.join(', ')}</span></p>
        <Button ClickHandler={() => navigate(`/case-studies/${slug}`)} small text='Read Case Study' />
      </Content>
      
    </CardContainer>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  slug: PropTypes.string
};