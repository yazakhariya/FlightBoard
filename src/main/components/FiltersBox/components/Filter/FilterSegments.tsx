import * as S from './FilterSegments.style'
import UiInput from 'src/components/UiInput/UiInput'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FilterSegments({seg}: any) {
  return (
    <S.FiltersBoxWrapper>
      <S.Header>Фильтровать</S.Header>
      <S.FilterComponent>
        <UiInput onChange={(e) => seg(e.target.value)} type="radio" value="1 пересадка" />
        <label>1 пересадка</label>
      </S.FilterComponent>
      <S.FilterComponent>
        <UiInput onChange={(e) => seg(e.target.value)} type="radio" value="без пересадок" />
        <label>без пересадок</label>
      </S.FilterComponent>
    </S.FiltersBoxWrapper>
  )
}