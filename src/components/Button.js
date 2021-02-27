import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonComponent = styled.button`
  display: flex;
  height: ${props => props.small ? '40px' : '56px'};
  margin-top: 0px;
  margin-bottom: 0px;
  padding: ${props => props.small ? '12px 24px' : '12px 32px'};
  align-items: center;
  border-radius: 2px;
  background-color: #00b5be;
  transition: box-shadow 300ms cubic-bezier(.23, 1, .32, 1), background-color 300ms cubic-bezier(.23, 1, .32, 1);
  color: #fff;
  font-size: ${props => props.small ? '14px' : '18px'};
  line-height: 1;
  font-weight: ${props => props.small ? '600' : '400'};
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #05cfd9;
    box-shadow: 0 4px 24px 0 rgb(5 207 217 / 35%);
    color: #fff;
  }
`;

export const Button = ({ text, ClickHandler, small }) => {
  return (
    <ButtonComponent small={small} href="" onClick={ClickHandler}>{text}</ButtonComponent>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  ClickHandler: PropTypes.string,
  small: PropTypes.bool
};