import * as React from 'react'
import * as S from './FlightBoard.style'
import { flights } from 'src/mockData/flights'
import Component from './components/CardComponent/CardComponent'
import NotFound from './components/NotFound/NotFound'
import SortingFilter from './components/Filters/SortingFilter'
import SegmentFilter from './components/Filters/SegmentFilter'
import CostFilter from './components/Filters/CostFilter'
import AirlinesFilter from './components/Filters/AirlinesFilter'
import UiButton from 'src/components/UiButton/UiButton'

export default function FlightBoard() {
  const elements = flights[0].result.flights
  const [value, setValue] = React.useState<string>('')
  const [filtered, setFiltered] = React.useState(elements)
  const [visible, setVisible] = React.useState(2)

  function handleButtonClick() {
    setVisible((prevNumber) => prevNumber + 4)
  }

  // фильтрация по значению

  const FilterCards = (
    <>
      {value === '- по возрастанию цены' ? (
        filtered.length === 0 ? (
          <NotFound />
        ) : (
          filtered
            .sort(
              (a, b) =>
                Number(a.flight.price.total.amount) -
                Number(b.flight.price.total.amount)
            )
            .slice(0, visible)
            .map((card, i: number) => {
              return <div key={i}><Component card={card.flight} i={i} /></div>
            })
        )
      ) : value === '- по убыванию цены' ? (
        filtered.length === 0 ? (
          <NotFound />
        ) : (
          filtered
            .sort(
              (a, b) =>
                Number(b.flight.price.total.amount) -
                Number(a.flight.price.total.amount)
            )
            .slice(0, visible)
            .map((card, i: number) => {
              return <div key={i}><Component card={card.flight} i={i} /></div>
            })
        )
      ) : value === '- по времени в пути' ? (
        filtered.length === 0 ? (
          <NotFound />
        ) : (
          filtered
            .sort(
              (a, b) => a.flight.legs[0].duration - b.flight.legs[0].duration
            )
            .slice(0, visible)
            .map((card, i: number) => {
              return <div key={i}><Component card={card.flight} i={i} /></div>
            })
        )
      ) : value === '1 пересадка' ? (
        filtered.length === 0 ? (
          <NotFound />
        ) : (
          filtered
            .filter((el) => el.flight.legs[0].segments.length === 2)
            .slice(0, visible)
            .map((card, i: number) => {
              return <div key={i}><Component card={card.flight} i={i} /></div>
            })
        )
      ) : value === 'без пересадок' ? (
        filtered.length === 0 ? (
          <NotFound />
        ) : (
          filtered
            .filter((el) => el.flight.legs[0].segments.length === 1)
            .slice(0, visible)
            .map((card, i: number) => {
              return <div key={i}><Component card={card.flight} i={i} /></div>
            })
        )
      ) : value === 'LOT Polish Airlines' ? (
        filtered.length === 0 ? (
          <NotFound />
        ) : (
          filtered
            .filter((el) => el.flight.carrier.caption === value)
            .slice(0, visible)
            .map((card, i: number) => {
              return <div key={i}><Component card={card.flight} i={i} /></div>
            })
        )
      ) : value === 'Air France' ? (
        filtered.length === 0 ? (
          <NotFound />
        ) : (
          filtered
            .filter((el) => el.flight.carrier.caption === value)
            .slice(0, visible)
            .map((card, i: number) => {
              return <div key={i}><Component card={card.flight} i={i} /></div>
            })
        )
      ) : value === 'KLM' ? (
        filtered.length === 0 ? (
          <NotFound />
        ) : (
          filtered
            .filter((el) => el.flight.carrier.caption === value)
            .slice(0, visible)
            .map((card, i: number) => {
              return <div key={i}><Component card={card.flight} i={i} /></div>
            })
        )
      ) : filtered.length === 0 ? (
        <NotFound />
      ) : (
        filtered.slice(0, visible).map((card, i: number) => {
          return <div key={i}><Component card={card.flight} i={i} /></div>
        })
      )}
    </>
  )

  return (
    <S.MainWrapper>
      <S.FiltersWrapper>
        <SortingFilter setValue={setValue} />
        <SegmentFilter setValue={setValue} />
        <CostFilter setFiltered={setFiltered} data={elements} />
        <AirlinesFilter setValue={setValue} />
      </S.FiltersWrapper>
      <S.CardsBoxWrapper>
        {FilterCards ? FilterCards : null}
        {filtered.length !== 0 ? <UiButton onClick={handleButtonClick} children={'Показат ещё'} /> : null}
      </S.CardsBoxWrapper>
    </S.MainWrapper>
  )
}
