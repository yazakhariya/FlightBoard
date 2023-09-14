import * as S from './CardsBox.style'
import { flights } from 'src/mockData/flights'
import Component from './component'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CardsBox({ value, priceMax, priceMin, seg }: any) {
  const els = flights[0].result.flights

  const FilterCards = (
    <>
      {value === '- по возрастанию цены'
        ? els
            .sort(
              (a, b) =>
                Number(a.flight.price.total.amount) -
                Number(b.flight.price.total.amount)
            )
            .map((card, i: number) => {
              return <div key={i}>{Component(card, i)}</div>
            })
        : value === '- по убыванию цены'
        ? els
            .sort(
              (a, b) =>
                Number(b.flight.price.total.amount) -
                Number(a.flight.price.total.amount)
            )
            .map((card, i: number) => {
              return <div key={i}>{Component(card, i)}</div>
            })
        : value === '- по времени в пути'
        ? els
            .sort(
              (a, b) => a.flight.legs[0].duration - b.flight.legs[0].duration
            )
            .map((card, i: number) => {
              return <div key={i}>{Component(card, i)}</div>
            })
        : priceMin || priceMax
        ? els
            .filter(
              (el) =>
                Number(priceMin) <= Number(el.flight.price.total.amount) &&
                Number(el.flight.price.total.amount) <= Number(priceMax)
            )
            .map((card, i: number) => {
              return <div key={i}>{Component(card, i)}</div>
            })
        : seg === '1 пересадка'
        ? els
            .filter((el) => el.flight.legs[0].segments.length === 2)
            .map((card, i: number) => {
              return <div key={i}>{Component(card, i)}</div>
            })
        : seg === 'без пересадок'
        ? els
            .filter((el) => el.flight.legs[0].segments.length === 1)
            .map((card, i: number) => {
              return <div key={i}>{Component(card, i)}</div>
            })
        : els.map((card, i: number) => {
            return <div key={i}>{Component(card, i)}</div>
          })}
    </>
  )

  return (
    <S.CardsBoxWrapper>{FilterCards ? FilterCards : null}</S.CardsBoxWrapper>
  )
}
