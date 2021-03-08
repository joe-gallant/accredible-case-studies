import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonComponent = styled.button`
  display: flex;
  height: ${(props) => (props.small ? '40px' : '56px')};
  margin-top: 0px;
  margin-bottom: 0px;
  padding: ${(props) => (props.small ? '12px 24px' : '12px 32px')};
  align-items: center;
  border-radius: 2px;
  background-color: ${(props) => (props.transparent ? 'transparent' : '#00b5be;')};
  transition: box-shadow 300ms cubic-bezier(0.23, 1, 0.32, 1),
    background-color 300ms cubic-bezier(0.23, 1, 0.32, 1);
  color: ${(props) => (props.transparent ? '#282955' : '#fff')};
  font-size: ${(props) => (props.small ? '14px' : '18px')};
  line-height: 1;
  font-weight: ${(props) => (props.small ? '600' : '400')};
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  border: ${(props) => (props.transparent ? '1px solid #282955' : '0')};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.transparent ? '#f7f7f5' : '#05cfd9;')};
    box-shadow: ${(props) => (props.transparent ? '0 8px 32px 0 rgb(40 41 85 / 15%)' : '0 4px 24px 0 rgb(5 207 217 / 35%)')};
    color: ${(props) => (props.transparent ? '#282955' : '#fff')};
  }
`

export const Button = ({ text, ClickHandler, small, transparent }) => {
  return (
    <ButtonComponent small={small} href="" transparent={transparent} onClick={ClickHandler}>
      {text}
    </ButtonComponent>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  ClickHandler: PropTypes.func,
  small: PropTypes.bool,
  transparent: PropTypes.bool,
}
