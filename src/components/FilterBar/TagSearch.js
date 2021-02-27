import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tagIcon from '../../img/tag-icon.svg'

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  img {
    position: absolute;
    width: 18px;
    top: 12px;
    right: 8px;
  }
`;

const SearchBox = styled.input`
  background: #ffffff;
  padding: 16px;
  width: 100%;
  border: none;
  appearance: none;
  border-radius: 4px;
  padding: 12px;
`;

const Dropdown = styled.div`
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 5px 20px -10px #000;
  width: 100%;
  top: calc(100% + 6px);
  left: 0;
  z-index: 5;
  border-radius: 4px;
`;

const Item = styled.div`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  &:hover {
    background: #f4f5fa;
  }

  &::after {
    content: '+';
    font-weight: bold;
    color: #5557cd;
  }
`;

export const TagSearch = ({ tags = [], placeholder = 'Industry', addTag }) => {
  const [value, setValue] = useState('');
  const [filterTags, setFilterTags] = useState([]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setFilterTags(tags.filter(tag => tag.toLowerCase().includes(newValue.toLowerCase())))
    setValue(newValue);
    document.addEventListener('mousedown', handleClickOutside);
  }

  const selectTag = (tag) => {
    addTag(tag);
    setValue('');
    setFilterTags([]);
    document.removeEventListener('mousedown', handleClickOutside);
  }

  const handleClickOutside = event => {
    if (!event.target.classList.contains('tag') && !event.target.classList.contains('input')) {
      setFilterTags([]);
      document.removeEventListener('mousedown', handleClickOutside);
    }
  };

  return (
    <Wrapper>
      <SearchBox className="search-input" placeholder={placeholder} type="text" value={value} onFocus={handleChange} onChange={handleChange}></SearchBox>

      <Dropdown>
        {filterTags.map(tag => (
          <Item className="tag" onClick={() => selectTag(tag)}>{tag}</Item>
        ))}
      </Dropdown>

      <img src={tagIcon} alt="tag icon" />
    </Wrapper>
  );
};

TagSearch.propTypes = {
  tags: PropTypes.array,
  placeholder: PropTypes.string,
  addTag: PropTypes.func
};