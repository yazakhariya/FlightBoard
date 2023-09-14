import * as React from 'react'
import * as S from './AirlineFilter.style'
import UiInput from 'src/components/UiInput/UiInput'

export default function AirlineFilter() {
  const [airline, setAirline] = React.useState<string>('')
  
  return (
    <S.FiltersBoxWrapper>
      <S.Header>Авиакомпании</S.Header>
      <S.FilterComponent>
        <UiInput onChange={(e) => setAirline(e.target.value)} type="radio"  />
        <label>--</label>
      </S.FilterComponent>
      <S.FilterComponent>
        <UiInput onChange={(e) => setAirline(e.target.value)} type="radio"  />
        <label>--</label>
      </S.FilterComponent>
    </S.FiltersBoxWrapper>
  )
}