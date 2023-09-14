import * as S from './SortPrice.style'
import UiInput from 'src/components/UiInput/UiInput'

export default function SortPrice() {

  return (
    <S.FiltersBoxWrapper>
      <S.Header>Сортировать</S.Header>
      <S.FilterComponent>
        <UiInput type="radio" value="- по возрастанию цены" />
        <label> - по возрастанию цены</label>
      </S.FilterComponent>
      <S.FilterComponent>
        <UiInput type="radio" value="- по убыванию цены" />
        <label> - по убыванию цены</label>
      </S.FilterComponent>
      <S.FilterComponent>
        <UiInput type="radio" value="- по времени в пути" />
        <label> - по времени в пути</label>
      </S.FilterComponent>
    </S.FiltersBoxWrapper>
  )
}
