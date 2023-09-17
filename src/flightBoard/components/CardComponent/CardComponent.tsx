import * as React from 'react'
import rub from 'src/assets/rub.svg'
import usd from 'src/assets/usd.svg'
import eur from 'src/assets/eur.svg'
import UiButton from 'src/components/UiButton/UiButton'
import CardHead from './components/CardHead/CardHead'
import * as S from './CardComponent.style'
import CardBody from './components/CardBody/CardBody'
import { Flight } from './components/CardHead/types'
import UiModal from 'src/components/UiModal/UiModal'

type Props = {
  card: Flight
  i: number
}

export default function Component({ card, i }: Props) {
  const [flightCardModal, setFlightCardModal] = React.useState<boolean | null>(
    null
  )

  function handleButtonClick() {
    setFlightCardModal(true)
  }

  const flightContent = flightCardModal ? (
    <UiModal closeModalFn={() => setFlightCardModal(null)}>
      <S.FlightContentWrapper>
        <S.Header>
          <b>
            {card.carrier.caption}, {card.carrier.airlineCode},
          </b>{' '}
          выполняет рейс
        </S.Header>
        <S.FlightInfo>
          <b>Общая цена:</b>
          <br />
          <S.CostBox>
            <img src={rub} width="40px" />:{' '}
            <b>{card.price.passengerPrices[0].total.amount}</b>,{' '}
            {card.price.passengerPrices[0].total.currencyCode}
            <br />
          </S.CostBox>
          <S.CostBox>
            <img src={eur} width="40px" />:{' '}
            <b>{card.price.rates.totalUsd.amount}</b>,{' '}
            {card.price.rates.totalUsd.currencyCode}
            <br />
          </S.CostBox>
          <S.CostBox>
            <img src={usd} width="40px" />:{' '}
            <b>{card.price.rates.totalEur.amount}</b>,{' '}
            {card.price.rates.totalEur.currencyCode}
          </S.CostBox>
        </S.FlightInfo>
      </S.FlightContentWrapper>
    </UiModal>
  ) : null

  return (
    <S.Card key={i}>
      <CardHead data={card} />
      <CardBody data={card} />
      <UiButton onClick={handleButtonClick} children={'Выбрать'} />
      {flightContent ? flightContent : null}
    </S.Card>
  )
}
