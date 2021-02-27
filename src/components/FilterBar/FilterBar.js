import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TagSearch } from './TagSearch'
import { DateRange } from 'react-date-range';
import calendarIcon from '../../img/calendar-icon.svg'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Filter = styled.div`
  background: #e4f0fb;
  padding: 18px;
  width: 100%;
  margin-bottom: 24px;
  border-radius: 8px;
`;

const FilterSections = styled.div`
  display: flex;
`;

const FilterSection = styled.div`
  border-right: 1px solid #fff;
  padding-right: 24px;
  margin-right: 24px;
  position: relative;
  width: 200px;

  &:last-of-type {
    margin-right: 0;
    border: none;
  }
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Tag = styled.div`
  padding: 6px 10px 6px 12px;
  background: #5557cd;
  color: #fff;
  width: auto;
  font-size: 14px;
  border-radius: 4px;
  margin-right: 6px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  cursor: pointer;
  margin-bottom: 6px;

  &::after {
    content: 'x';
    margin-left: 12px;
    opacity: 0.5;
    transform: translateY(-1px);
  }

  &:hover {
    opacity: 0.9;
  }
`;

const DateButton = styled.div`
  background: #5557cd;
  padding: 16px;
  width: 100%;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 14px;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-content: center;
  cursor: pointer;

  &:hover {
    img {
      opacity: 0.5;
    }
  }

  img {
    width: 20px;
  }
`;

const DateRangeContainer = styled.div`
  margin-top: 14px;
  position: absolute;
  left: 0;
  width: 100%;
  top: 40px;
  z-index: 10;
`;

export const FilterBar = ({ industries = ['Test', 'Taggy', 'Hello world', 'tgerg', 'tesg', 'testtt'], topics = ['test', 'testies'], platforms = ['Accredible'] }) => {
  const [activeTopicTags, setActiveTopicTags] = useState([]);
  const [activeIndustryTags, setActiveIndustryTags] = useState([]);
  const [activePlatformTags, setActivePlatformTags] = useState([]);
  const [datePickerActive, setDatePickerActive] = useState(false);
  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);


  const addTag = (tag, type) => {
    switch (type) {
      case 'industry':
        setActiveIndustryTags([...activeIndustryTags, tag]);
        break;
      case 'topic':
        setActiveTopicTags([...activeTopicTags, tag]);
        break;
      default:
        setActivePlatformTags([...activePlatformTags, tag]);
    }
  }

  const removeTag = (tagValue, type) => {
    switch (type) {
      case 'industry':
        setActiveIndustryTags(activeIndustryTags.filter(tag => tag !== tagValue));
        break;
      case 'topic':
        setActiveTopicTags(activeTopicTags.filter(tag => tag !== tagValue));
        break;
      default:
        setActivePlatformTags(activePlatformTags.filter(tag => tag !== tagValue));
    }
  }

  const setDateRange = (item) => {
    setDateState([item.selection]);
  }

  return (
    <Filter>
      <h3>Filter:</h3>

      <FilterSections>

        {/* Industries */}
        <FilterSection>
          <TagSearch placeholder="Industry" addTag={tag => addTag(tag, 'industry')} tags={industries.filter(tag => !activeIndustryTags.includes(tag))} />

          {activeIndustryTags.length > 0 && (
            <Tags>
              {activeIndustryTags.map(tag => (
                <Tag onClick={() => removeTag(tag, 'industry')}>{tag}</Tag>
              ))}
            </Tags>
          )}
        </FilterSection>
        
        {/* Topic */}
        <FilterSection>
          <TagSearch placeholder="Topics" addTag={tag => addTag(tag, 'topic')} tags={topics.filter(tag => !activeTopicTags.includes(tag))} />

          {activeTopicTags.length > 0 && (
            <Tags>
              {activeTopicTags.map(tag => (
                <Tag onClick={() => removeTag(tag, 'topic')}>{tag}</Tag>
              ))}
            </Tags>
          )}
        </FilterSection>

        {/* Platform */}
        <FilterSection>
          <TagSearch placeholder="Platform" addTag={tag => addTag(tag, 'platform')} tags={platforms.filter(tag => !activePlatformTags.includes(tag))} />

          {activePlatformTags.length > 0 && (
            <Tags>
              {activePlatformTags.map(tag => (
                <Tag onClick={() => removeTag(tag, 'platform')}>{tag}</Tag>
              ))}
            </Tags>
          )}
        </FilterSection>


        {/* Date range */}
        <FilterSection>
          <DateButton onClick={() => setDatePickerActive(!datePickerActive)}>{!datePickerActive ? 'Filter by date' : 'Close'} <img src={calendarIcon} alt="Calendar icon" /></DateButton>
          
          {datePickerActive && (
            <DateRangeContainer>
              <DateRange
                editableDateInputs={true}
                onChange={item => setDateRange(item)}
                moveRangeOnFirstSelection={false}
                ranges={dateState}
              />
            </DateRangeContainer>
          )}
        </FilterSection>

      </FilterSections>
    </Filter>
  );
};

FilterBar.propTypes = {
  industries: PropTypes.array,
  topics: PropTypes.array,
  platforms: PropTypes.array
};