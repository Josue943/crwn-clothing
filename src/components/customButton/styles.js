import styled, { css } from 'styled-components';

const buttonStyles = css`
  border: none;
  font-family: 'Open Sans Condensed';
  font-size: 1.6rem;
  font-weight: bolder;
  height: 50px;
  padding: 10px;
  text-transform: uppercase;
  width: 100%;
`;

const blackButton = css`
  background: #000;
  color: #fff;
  &:hover {
    color: #000;
    background: #fff;
    border: 1px solid #000;
  }
`;

const whiteButton = css`
  color: #000;
  background: #fff;
  &:hover {
    color: #fff;
    background: #000;
  }
`;

const getButtonStyles = ({ color }) => (color === 'black' ? blackButton : whiteButton);

export default styled.button`
  ${buttonStyles}
  ${getButtonStyles}
`;
