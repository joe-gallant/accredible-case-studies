import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SearchIcon from '../img/search-icon.svg'

const BannerContainer = styled.div`
  background-color: #282955;
  background-image: ${props => props.img ? `url(${props.img})` : 'linear-gradient(45deg, #282955, #454798)'};
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  background-position: center center;
  text-align: center;
  padding: 0 24px;

  * {
    color: #ffffff;
    z-index: 1;
    position: relative;
  }

  .tagline {
    margin-bottom: 0;
    color: hsla(0, 0%, 100%, 0.7);
  }
`;

const Gradient = styled.div`
  background-image: linear-gradient(45deg, #282955, #454798);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 0;
  opacity: 0.8;
`;

const SearchBar = styled.input`
  background: #ffffff;
  border: none;
  border-radius: 4px;
  appearance: none;
  padding: 18px;
  font-size: 18px;
  margin: 0;
  width: 100%;
  color: #282955;
`;

const SearchBarContainer = styled.div`
  position: relative;
  margin-top: 24px;
  width: 500px;
  max-width: 100%;

  img {
    position: absolute;
    width: 24px;
    right: 20px;
    top: 16px;
    cursor: pointer;
  }
`;

export const Banner = ({ title, tagline, image, placeholder = 'Enter your search term...', submitSearch, search = false, searchValue = '' }) => {

  const [searchTerm, setSearchTerm] = useState(searchValue);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      submitSearch(searchTerm);
    }
  }

  return (
    <BannerContainer img={image}>
      <Gradient img={image} />
      {tagline && <p className="text--lg tagline">{tagline}</p>}
      <h1 className="h1--big">{title}</h1>

      {search && (
        <SearchBarContainer>
          <SearchBar onChange={handleChange} onKeyDown={handleKeyDown} placeholder={placeholder} />
          <img src={SearchIcon} alt="Search icon" onClick={() => submitSearch(searchTerm)} />
        </SearchBarContainer>
      )}
    </BannerContainer>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string
};