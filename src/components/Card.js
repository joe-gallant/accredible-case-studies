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
  box-shadow: 0 8px 32px 0 rgb(40 41 85 / 15%);
  margin-bottom: 24px;
  overflow: hidden;
  padding: 24px;

  p {
    font-size: 16px;
    margin: 0;
  }
`;

const Content = styled.div`
  width: 55%;
  height: 100%;
  padding: 12px 24px;
  border-left: 1px solid #e4f0fb;
  margin-left: 24px;

  span {
    color: #5557cd;
  }

  Button {
    margin-top: 24px;
  }
`;

const Image = styled.div`
  width: 45%;
  flex: 1;

  img {
    width: 100%;
    height: auto;
  }
`;

export const Card = ({ image, slug, title, author, date, topics = [] }) => {
  return (
    <CardContainer>

      <Image>
        <img src={image} alt={title + ' image'} />
      </Image>
      <Content>
        {title && <h3>{title}</h3>}
        {author && <p>Author: <span>{author}</span></p>}
        {date && <p>Date: <span>{date}</span></p>}
        <br />
        <br />
        {topics && topics.length > 0 && (
          <div className="tags-section">
            <p>Topics:</p> 
            {topics.map((topic, index) => <div key={index} className="single-tag">{topic}</div>)}
          </div>
        )}
        {slug && <Button ClickHandler={() => navigate(slug)} small text='Read More' />}
      </Content>
      
    </CardContainer>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  slug: PropTypes.string
};