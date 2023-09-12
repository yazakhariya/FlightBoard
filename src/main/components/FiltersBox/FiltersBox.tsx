import * as S from './FiltersBox.style'
import SortPrice from './components/Sort/SortPrice'

// change width from 600 to fit-content

export default function FiltersBox() {
  return (
    <S.FiltersWrapper>
      <SortPrice />
    </S.FiltersWrapper>
  )
}