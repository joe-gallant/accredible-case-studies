import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SearchIcon from '../img/search-icon.svg'

const BannerContainer = styled.div`
  background: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : 'linear-gradient(45deg, #282955, #454798)'};
  background-image: ${(props) => (props.img ? `url(${props.img})` : '')};
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
  padding: 24px;

  * {
    color: #ffffff;
    z-index: 1;
    position: relative;
  }

  .tagline {
    margin-bottom: 0;
    color: hsla(0, 0%, 100%, 0.7);
  }

  @media (max-width: 767px) {
    min-height: 300px;
  }
`

const Gradient = styled.div`
  background: ${(props) =>
    props.color ? props.color : 'linear-gradient(45deg, #282955, #454798)'};
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 0;
  opacity: 0.8;
`

const SearchBar = styled.input`
  background: #ffffff;
  border: none;
  border-radius: 4px;
  appearance: none;
  padding: 18px;
  font-size: 18px;
  margin: 0;
  width: 100%;
  color: #282955;
  box-shadow: 0 8px 32px 0 rgb(40 41 85 / 15%);
`

const SearchBarContainer = styled.div`
  position: relative;
  margin-top: 24px;
  width: 500px;
  max-width: 100%;

  button {
    appearance: none;
    position: absolute;
    margin: 0;
    right: 24px;
    border: none;
    background: none;
    padding: 0;
    top: 16px;
    cursor: pointer;
  }

  img {
    width: 24px;
  }
`

export const Banner = ({
  title,
  tagline,
  image,
  placeholder = 'Enter your search term...',
  submitSearch,
  search = false,
  searchValue = '',
  smallHeader = false,
  overlayColor,
  overlay,
}) => {
  const [searchTerm, setSearchTerm] = useState(searchValue)

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      submitSearch(searchTerm)
    }
  }

  return (
    <BannerContainer backgroundColor={overlayColor} img={image}>
      {overlay && <Gradient color={overlayColor} img={image} />}
      <div className="container">
        {tagline && <p className="text--lg tagline">{tagline}</p>}
        <h1 className={!smallHeader ? 'h1--big' : null}>{title}</h1>
      </div>

      {search && (
        <SearchBarContainer>
          <SearchBar
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
          />
          <button
            onClick={() => submitSearch(searchTerm)}
            onKeyDown={() => submitSearch(searchTerm)}
          >
            <img src={SearchIcon} alt="Search icon" />
          </button>
        </SearchBarContainer>
      )}
    </BannerContainer>
  )
}

Banner.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
}
