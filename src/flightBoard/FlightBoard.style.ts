import { styled } from 'styled-components'

export const MainWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 50px;
  background-color: #eaece1;
  gap: 30px;
`

export const FiltersWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const CardsBoxWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: fit-content;
  align-items: center;
`
