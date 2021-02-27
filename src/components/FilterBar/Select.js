import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import downIcon from '../../img/down-icon.svg'

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  img {
    position: absolute;
    right: 8px;
    top: 15px;
    width: 10px;
  }
`;

const SelectInput = styled.select`
  background: #ffffff;
  padding: 16px;
  width: 100%;
  border: none;
  appearance: none;
  border-radius: 4px;
  padding: 12px;
  cursor: pointer;
`;

export const Select = ({ tags = [], placeholder = 'Industry', addTag }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    addTag(event.target.value);
  }

  return (
    <Wrapper>
      <SelectInput placeholder={placeholder} type="select" value={value} onChange={handleChange}>
        <option key="999" value="">Choose a platform</option>
        {tags.map((tag, index) => (
          <option key={index} value={tag}>{tag}</option>
        ))}
      </SelectInput>
      <img src={downIcon} alt="Down arrow icon" />
    </Wrapper>
  );
};

Select.propTypes = {
  tags: PropTypes.array,
  placeholder: PropTypes.string,
  addTag: PropTypes.func
};