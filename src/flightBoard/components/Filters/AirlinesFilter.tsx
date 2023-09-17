import * as React from 'react'
import * as S from './Filters.style'
import UiInput from 'src/components/UiInput/UiInput'

type Props = {
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function AirlinesFilter({ setValue }: Props) {
  return (
    <S.FiltersBoxWrapper>
      <S.Header>Авиакомпании</S.Header>
      <S.FilterComponent>
        <UiInput
          onChange={(e) => setValue(e.target.value)}
          type="checkbox"
          name="checkbox"
          value="LOT Polish Airlines"
        />
        <label>LOT Polish Airlines от 21000р.</label>
      </S.FilterComponent>
      <S.FilterComponent>
        <UiInput
          onChange={(e) => setValue(e.target.value)}
          type="checkbox"
          name="checkbox"
          value="Air France"
        />
        <label>Air France от 23000р.</label>
      </S.FilterComponent>
      <S.FilterComponent>
        <UiInput
          onChange={(e) => setValue(e.target.value)}
          type="checkbox"
          name="checkbox"
          value="KLM"
        />
        <label>KLM от 24000р.</label>
      </S.FilterComponent>
    </S.FiltersBoxWrapper>
  )
}
