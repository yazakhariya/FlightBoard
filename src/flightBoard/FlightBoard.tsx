import * as React from 'react'
import * as C from './FlightBoard.style'
import { flights } from 'src/mockData/flights'
import Component from './components/CardComponent/CardComponent'
import * as S from 'src/flightBoard/components/Filters/Filters.style'
import UiInput from 'src/components/UiInput/UiInput'
import UiButton from 'src/components/UiButton/UiButton'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FlightBoard() {
  const els = flights[0].result.flights
  const [value, setValue] = React.useState<string>('')
  const [priceMin, setPriceMin] = React.useState<string>('')
  const [priceMax, setPriceMax] = React.useState<string>('')
  const [filtered, setFiltered] = React.useState(els)

  // Фильт-компонент по возрастанию цены, убыванию и времени в пути
  const SortingFilter = (
    <S.FiltersBoxWrapper>
      <S.Header>Сортировать</S.Header>
      <S.FilterComponent>
        <UiInput
          onChange={(e) => setValue(e.target.value)}
          type="radio"
          value="- по возрастанию цены"
        />
        <label> - по возрастанию цены</label>
      </S.FilterComponent>
      <S.FilterComponent>
        <UiInput
          onChange={(e) => setValue(e.target.value)}
          type="radio"
          value="- по убыванию цены"
        />
        <label> - по убыванию цены</label>
      </S.FilterComponent>
      <S.FilterComponent>
        <UiInput
          onChange={(e) => setValue(e.target.value)}
          type="radio"
          value="- по времени в пути"
        />
        <label> - по времени в пути</label>
      </S.FilterComponent>
    </S.FiltersBoxWrapper>
  )

  const SegmentsFilter = (
    <S.FiltersBoxWrapper>
      <S.Header>Фильтровать</S.Header>
      <S.FilterComponent>
        <UiInput
          onChange={(e) => setValue(e.target.value)}
          type="radio"
          value="1 пересадка"
        />
        <label>1 пересадка</label>
      </S.FilterComponent>
      <S.FilterComponent>
        <UiInput
          onChange={(e) => setValue(e.target.value)}
          type="radio"
          value="без пересадок"
        />
        <label>без пересадок</label>
      </S.FilterComponent>
    </S.FiltersBoxWrapper>
  )

  const CostFilter = (
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
        <UiButton onClick={() => handleButtonClick()} children={'Поиск'} />
      </S.CostBox>
    </S.FiltersBoxWrapper>
  )

  function handleButtonClick() {
    if (priceMin || priceMax) {
      const price = els.filter(
        (el) =>
          Number(priceMin) <= Number(el.flight.price.total.amount) &&
          Number(el.flight.price.total.amount) <= Number(priceMax)
      )

      setFiltered(price)
    } else {
      setFiltered(els)
    }
  }

  const FilterCards = (
    <>
      {value === '- по возрастанию цены'
        ? filtered
            .sort(
              (a, b) =>
                Number(a.flight.price.total.amount) -
                Number(b.flight.price.total.amount)
            )
            .map((card, i: number) => {
              return <div key={i}>{Component(card, i)}</div>
            })
        : value === '- по убыванию цены'
        ? filtered
            .sort(
              (a, b) =>
                Number(b.flight.price.total.amount) -
                Number(a.flight.price.total.amount)
            )
            .map((card, i: number) => {
              return <div key={i}>{Component(card, i)}</div>
            })
        : value === '- по времени в пути'
        ? filtered
            .sort(
              (a, b) => a.flight.legs[0].duration - b.flight.legs[0].duration
            )
            .map((card, i: number) => {
              return <div key={i}>{Component(card, i)}</div>
            })
        : value === '1 пересадка'
        ? filtered
            .filter((el) => el.flight.legs[0].segments.length === 2)
            .map((card, i: number) => {
              return <div key={i}>{Component(card, i)}</div>
            })
        : value === 'без пересадок'
        ? filtered
            .filter((el) => el.flight.legs[0].segments.length === 1)
            .map((card, i: number) => {
              return <div key={i}>{Component(card, i)}</div>
            })
        : filtered.map((card, i: number) => {
            return <div key={i}>{Component(card, i)}</div>
          })}
    </>
  )

  return (
    <C.MainWrapper>
      <C.CardsBoxWrapper>
        {SortingFilter ? SortingFilter : null}
        {SegmentsFilter ? SegmentsFilter : null}
        {CostFilter ? CostFilter : null}
        {FilterCards ? FilterCards : null}
      </C.CardsBoxWrapper>
    </C.MainWrapper>
  )
}
