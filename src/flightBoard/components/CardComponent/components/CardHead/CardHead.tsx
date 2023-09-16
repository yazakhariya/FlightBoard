import { DataType } from './types'
import * as S from './CardHead.style'

type Props = {
  data: DataType
}

export default function CardHead({ data }: Props) {
  return (
    <S.Header>
      <S.Airline>{data.carrier.caption}</S.Airline>
      <S.Info>
        <S.Price>
          {data.price.passengerPrices[0].singlePassengerTotal.amount}{' '}
          {data.price.passengerPrices[0].singlePassengerTotal.currencyCode}
        </S.Price>
        <S.SubHeading>Стоимость для одного взрослого пассажира</S.SubHeading>
      </S.Info>
    </S.Header>
  )
}
