
import * as S from './SortPrice.style'
import UiInput from 'src/components/UiInput/UiInput'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SortPrice({propSort}: any) {

  return (
    <S.FiltersBoxWrapper>
      <S.Header>Сортировать</S.Header>
      <S.FilterComponent>
        <UiInput onChange={(e) => propSort(e.target.value)} type="radio" value="- по возрастанию цены" />
        <label> - по возрастанию цены</label>
      </S.FilterComponent>
      <S.FilterComponent>
        <UiInput onChange={(e) => propSort(e.target.value)} type="radio" value="- по убыванию цены" />
        <label> - по убыванию цены</label>
      </S.FilterComponent>
      <S.FilterComponent>
        <UiInput onChange={(e) => propSort(e.target.value)} type="radio" value="- по времени в пути" />
        <label> - по времени в пути</label>
      </S.FilterComponent>
    </S.FiltersBoxWrapper>
  )
}
