import * as S from './FilterSegments.style'
import UiInput from 'src/components/UiInput/UiInput'

export default function FilterSegments() {
  return (
    <S.FiltersBoxWrapper>
      <S.Header>Фильтровать</S.Header>
      <S.FilterComponent>
        <UiInput type="radio" value="1 пересадка" />
        <label>1 пересадка</label>
      </S.FilterComponent>
      <S.FilterComponent>
        <UiInput type="radio" value="без пересадок" />
        <label>без пересадок</label>
      </S.FilterComponent>
    </S.FiltersBoxWrapper>
  )
}