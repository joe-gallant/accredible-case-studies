import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TagSearch } from './TagSearch'
import { Select } from './Select'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Button } from '../Button'

const Filter = styled.div`
  background: #e4f0fb;
  padding: 18px;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 12px;
  border-radius: 8px;

  .filter-title {
    margin-right: 24px;
    margin-top: 6px;

    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;

const FilterSections = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

const FilterSection = styled.div`
  border-right: 1px solid #fff;
  padding-right: 24px;
  margin-right: 24px;
  position: relative;
  width: 300px;

  &:last-of-type {
    margin-right: 0;
    border: none;
    padding-right: 0;
  }

  @media (max-width: 767px) {
    width: 50%;
    margin: 0 0 24px;
    flex: 0 0 calc(50% - 12px);

    &:last-of-type {
      padding-right: 24px;
      border-right: 1px solid #fff;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    flex: 0 0 100%;
    border-right: none;
    padding: 0;

    &:last-of-type {
      border: none;
      padding: 0;
    }
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

const FilterSummary = styled.div`
  margin-bottom: 24px;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-bottom: 0;
  }

  div {
    display: flex;
    align-items: center;
    margin-left: auto;

    p {
      margin-right: 12px;
      margin-bottom: 0;
    }
  }
`;

export const FilterBar = ({ industries = ['Test', 'Taggy', 'Hello world', 'tgerg', 'tesg', 'testtt'], topics = ['test', 'testies'], dates = ['2018', '2019'], platforms = ['Accredible'], searchTerm, resultCount, clearSearch, updateToFilters, addedTags }) => {
  const [activeTopicTags, setActiveTopicTags] = useState([]);
  const [activeIndustryTags, setActiveIndustryTags] = useState([]);
  const [activePlatformTags, setActivePlatformTags] = useState([]);
  const [activeDate, setActiveDate] = useState();

  const addTag = (tag, type) => {
    switch (type) {
      case 'industry':
        setActiveIndustryTags([...activeIndustryTags, tag]);
        break;
      case 'topic':
        setActiveTopicTags([...activeTopicTags, tag]);
        break;
      case 'platform':
        if (tag) {
          setActivePlatformTags([tag]);
        } else {
          setActivePlatformTags([]);
        }
        break;
      default:
        setActiveDate(tag);
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
        setActivePlatformTags([]);
    }
  }

  const clearAllFilters = () => {
    setActiveIndustryTags([])
    setActiveTopicTags([])
    setActivePlatformTags([])
    setActiveDate()
    clearSearch('clear')
  }

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
  
    const topicsParams = urlParams.get('topics');
    const industriesParams = urlParams.get('industries');

    if (topicsParams) setActiveTopicTags(topicsParams.split(','));
    if (industriesParams) setActiveIndustryTags(industriesParams.split(','));

    window.history.pushState({}, document.title, '/case-studies');
  }, [addedTags])

  useEffect(() => {
    updateToFilters({ activeIndustryTags, activeTopicTags, activePlatformTags, activeDate });
  }, [activeIndustryTags, activeTopicTags, activePlatformTags, activeDate, searchTerm])

  return (
    <>
      <Filter>

        <FilterSections>
          <h3 className="filter-title">Filter:</h3>

          {/* Industries */}
          <FilterSection>
            <TagSearch placeholder="Industry" addTag={tag => addTag(tag, 'industry')} tags={industries.filter(tag => !activeIndustryTags.includes(tag))} />

            {activeIndustryTags.length > 0 && (
              <Tags>
                {activeIndustryTags.map((tag, index) => (
                  <Tag key={index} onClick={() => removeTag(tag, 'industry')}>{tag}</Tag>
                ))}
              </Tags>
            )}
          </FilterSection>
          
          {/* Topic */}
          <FilterSection>
            <TagSearch placeholder="Topics" addTag={tag => addTag(tag, 'topic')} tags={topics.filter(tag => !activeTopicTags.includes(tag))} />

            {activeTopicTags.length > 0 && (
              <Tags>
                {activeTopicTags.map((tag, index) => (
                  <Tag key={index} onClick={() => removeTag(tag, 'topic')}>{tag}</Tag>
                ))}
              </Tags>
            )}
          </FilterSection>

          {/* Platform */}
          <FilterSection>
            <Select 
              placeholder="Choose a platform" 
              addTag={tag => addTag(tag, 'platform')} 
              tags={platforms} 
            />
          </FilterSection>

          {/* Date */}
          <FilterSection>
            <Select 
              placeholder="Filter by year" 
              addTag={tag => addTag(tag, 'date')} 
              tags={dates} 
            />
          </FilterSection>

  

          {/* Date range
          <FilterSection>
            <DateButton onClick={() => setDatePickerActive(!datePickerActive)}>
              {!datePickerActive ? 'Filter by date' : 'Close'} 
              <img src={calendarIcon} alt="Calendar icon" />
            </DateButton>
            
            {dateState[0].startDate && (
              <DateTags onClick={() => clearDates()}>
                <p>Start date: <strong>{moment(dateState[0].startDate).format('MMM Do YYYY')}</strong></p>
                <p>End date: <strong>{moment(dateState[0].endDate).format('MMM Do YYYY')}</strong></p>
              </DateTags>
            )}

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
          </FilterSection> */}

        </FilterSections>
      </Filter>
      <FilterSummary>
        {searchTerm && <p>You searched: {searchTerm}</p>}

        <div>
          <p>{resultCount} results</p>
          {(activeIndustryTags.length > 0 || activePlatformTags.length > 0 || activeTopicTags.length > 0 || activeDate || searchTerm) && <Button small text="Clear all filters" ClickHandler={() => clearAllFilters()} />}
        </div>
      </FilterSummary>
    </>
  );
};

FilterBar.propTypes = {
  industries: PropTypes.array,
  topics: PropTypes.array,
  platforms: PropTypes.array
};