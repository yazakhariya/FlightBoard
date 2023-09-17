import * as React from 'react'
import * as S from './Filters.style'
import UiInput from 'src/components/UiInput/UiInput'

type Props = {
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function SortingFilter({ setValue }: Props) {
  return (
    <S.FiltersBoxWrapper>
      <S.Header>Сортировать</S.Header>
      <S.FilterComponent>
        <UiInput
          onChange={(e) => setValue(e.target.value)}
          type="radio"
          name="radio"
          value="- по возрастанию цены"
        />
        <label> - по возрастанию цены</label>
      </S.FilterComponent>
      <S.FilterComponent>
        <UiInput
          onChange={(e) => setValue(e.target.value)}
          type="radio"
          name="radio"
          value="- по убыванию цены"
        />
        <label> - по убыванию цены</label>
      </S.FilterComponent>
      <S.FilterComponent>
        <UiInput
          onChange={(e) => setValue(e.target.value)}
          type="radio"
          name="radio"
          value="- по времени в пути"
        />
        <label> - по времени в пути</label>
      </S.FilterComponent>
    </S.FiltersBoxWrapper>
  )
}
