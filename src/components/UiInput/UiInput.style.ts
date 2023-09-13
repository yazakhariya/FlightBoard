import { styled } from 'styled-components'

export const Input = styled.input`
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  outline: none;
  border: none;
  margin-right: 5px;
  margin-left: 5px;
  &&::-webkit-outer-spin-button,
  &&::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
    margin: 0;
`