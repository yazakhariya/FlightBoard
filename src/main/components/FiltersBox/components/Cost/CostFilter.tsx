import * as S from './CostFilter.style'
import UiInput from 'src/components/UiInput/UiInput'
import UiButton from 'src/components/UiButton/UiButton'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CostFilter({ priceMin, priceMax } : any) {
  return (
    <S.FiltersBoxWrapper>
      <S.Header>Цена</S.Header>
      <S.CostBox>
        <S.FilterComponent>
          <span>От</span>
          <UiInput
            onChange={(e) => priceMin(e.target.value)}
            type="number"
            placeholder="0"
          />
        </S.FilterComponent>
        <S.FilterComponent>
          <span>До</span>
          <UiInput
            onChange={(e) => priceMax(e.target.value)}
            type="number"
            placeholder="10 000"
          />
        </S.FilterComponent>
        <UiButton children={'Поиск'} />
      </S.CostBox>
    </S.FiltersBoxWrapper>
  )
}
