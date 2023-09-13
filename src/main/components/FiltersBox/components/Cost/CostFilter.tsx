import * as S from './CostFilter.style'
import UiInput from 'src/components/UiInput/UiInput'

export default function CostFilter() {
  return (
    <S.FiltersBoxWrapper>
      <S.Header>Цена</S.Header>
      <S.FilterComponent>
        <span>От</span>
        <UiInput type="number" placeholder="0" />
      </S.FilterComponent>
      <S.FilterComponent>
        <span>До</span>
        <UiInput type="number" placeholder="10 000" />
      </S.FilterComponent>
    </S.FiltersBoxWrapper>
  )
}
