import UiButton from 'src/components/UiButton/UiButton'
import * as S from './CardsBox.style'
import { flights } from 'src/mockData/flights'

export default function CardsBox() {
  const flight = flights.map((item) =>
    item.result.flights.map((card) => card.flight)
  )
  console.log(flight)
  return (
    <S.CardsBoxWrapper>
      {flight[0].map((card, i: number) => {
        return (
          <S.Card key={i}>
            <S.Header>
              <S.Airline>{card.carrier.caption}</S.Airline>
              <S.Info>
                <S.Price>
                  {card.price.passengerPrices[0].singlePassengerTotal.amount} {card.price.passengerPrices[0].singlePassengerTotal.currencyCode}
                </S.Price>
                <S.SubHeading>
                  Стоимость для одного взрослого пассажира
                </S.SubHeading>
              </S.Info>
            </S.Header>
            <UiButton children={'Выбрать'} />
          </S.Card>
        )
      })}
    </S.CardsBoxWrapper>
  )
}
