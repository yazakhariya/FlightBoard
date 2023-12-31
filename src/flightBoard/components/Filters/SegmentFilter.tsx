import * as React from 'react'
import * as S from './Filters.style'
import UiInput from 'src/components/UiInput/UiInput'

type Props = {
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function SegmentFilter({ setValue }: Props) {
  return (
    <S.FiltersBoxWrapper>
      <S.Header>Фильтровать</S.Header>
      <S.FilterComponent>
        <UiInput
          onChange={(e) => setValue(e.target.value)}
          type="checkbox"
          name="checkbox"
          value="1 пересадка"
        />
        <label>1 пересадка</label>
      </S.FilterComponent>
      <S.FilterComponent>
        <UiInput
          onChange={(e) => setValue(e.target.value)}
          type="checkbox"
          name="checkbox"
          value="без пересадок"
        />
        <label>без пересадок</label>
      </S.FilterComponent>
    </S.FiltersBoxWrapper>
  )
}
