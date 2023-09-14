import * as S from './Main.style'
import CardsBox from './components/CardsBox/CardsBox'
import FiltersBox from './components/FiltersBox/FiltersBox'
import * as React from 'react'

export default function Main() {
  const [value, setValue] = React.useState<string>('')
  const [priceMin, setPriceMin] = React.useState<string>('')
  const [priceMax, setPriceMax] = React.useState<string>('')
  const [segment, setSegment] = React.useState('')

  return (
    <S.MainWrapper>
      <FiltersBox
        priceMin={setPriceMin}
        priceMax={setPriceMax}
        props={setValue}
        seg={setSegment}
      />
      <CardsBox
        seg={segment}
        priceMin={priceMin}
        priceMax={priceMax}
        value={value}
      />
    </S.MainWrapper>
  )
}
