import { styled } from 'styled-components'

export const Button = styled.button`
  outline: none;
  border: none;
  color: #000000;
  border-radius: 5px;
  font-weight: 600;
  font-size: 20px;
  width: 200px;
  background: #37acfd;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  padding: 10px 36px;
  box-shadow:
    inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);

  &&:active {
    box-shadow: 2px 2px 5px #000;
  }
`