import { styled } from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: #9bd5fe;
  border-radius: 15px;
  padding: 10px;
  width: 800px;
`

export const FlightContentWrapper = styled.div`
  border-radius: 12px;
  background-color: #e6eede;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 36px 42px 44px;
  position: relative;
`

export const Header = styled.span`
  font-size: 30px;
`

export const FlightInfo = styled.div`
  font-size: 24px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: flex-start;
`
export const CostBox = styled.div`
  display: flex;
  gap: 5px;
`
