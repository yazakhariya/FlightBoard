import * as S from './AirlineFilter.style'
import UiInput from 'src/components/UiInput/UiInput'

export default function AirlineFilter() {
  return (
    <S.FiltersBoxWrapper>
      <S.Header>Авиакомпании</S.Header>
      <S.FilterComponent>
        <UiInput type="radio"  />
        <label>--</label>
      </S.FilterComponent>
      <S.FilterComponent>
        <UiInput type="radio"  />
        <label>--</label>
      </S.FilterComponent>
    </S.FiltersBoxWrapper>
  )
}