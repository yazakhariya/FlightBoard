import * as React from 'react'
import * as S from './Filters.style'
import UiInput from 'src/components/UiInput/UiInput'
import UiButton from 'src/components/UiButton/UiButton'
import { Data } from '../CardComponent/components/CardHead/types'

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFiltered: React.Dispatch<React.SetStateAction<Data[] | any>>
  data: Data[]
}

export default function CostFilter({ setFiltered, data }: Props) {
  const [priceMin, setPriceMin] = React.useState<string>('')
  const [priceMax, setPriceMax] = React.useState<string>('')

  function handleButtonClick() {
    if (priceMin || priceMax) {
      const price = data.filter(
        (el: Data) =>
          Number(priceMin) <= Number(el.flight.price.total.amount) &&
          Number(el.flight.price.total.amount) <= Number(priceMax)
      )
      setFiltered(price)
    } else {
      setFiltered(data)
    }
  }
  
  return (
    <S.FiltersBoxWrapper>
      <S.Header>Цена</S.Header>
      <S.CostBox>
        <S.FilterComponent>
          <span>От</span>
          <UiInput
            onChange={(e) => setPriceMin(e.target.value)}
            type="number"
            placeholder="0"
          />
        </S.FilterComponent>
        <S.FilterComponent>
          <span>До</span>
          <UiInput
            onChange={(e) => setPriceMax(e.target.value)}
            type="number"
            placeholder="10 000"
          />
        </S.FilterComponent>
        <UiButton
          disabled={Number(priceMin) < 0 || Number(priceMax) < 0 ? true : false}
          onClick={() => handleButtonClick()}
          children={'Поиск'}
        />
      </S.CostBox>
    </S.FiltersBoxWrapper>
  )
}
