import { LegElement } from '../../types'
import * as S from './Forward.style'

type Props = {
  data: LegElement
}

export default function Forward({ data }: Props) {
  
  function getTimeFromMins(mins: number) {
    const hours = Math.trunc(mins / 60)
    const minutes = mins % 60
    return hours + ' ' + 'ч' + ' ' + minutes + ' ' + 'мин'
  }

  return (
    <S.Wrapper>
      <S.Cities>
        <S.Name>
          {data.segments[0].departureCity.caption},{' '}
          {data.segments[0].departureAirport.caption} (
          {data.segments[0].departureAirport.uid}){' '}
        </S.Name>

        <S.Time>{getTimeFromMins(data.duration)}</S.Time>

        {data.segments[1]?.arrivalAirport?.caption !== undefined ? (
          <S.Name>
            {data.segments[1].arrivalAirport.caption} (
            {data.segments[1].arrivalAirport.uid})
          </S.Name>
        ) : (
          <S.Name>
            {data.segments[0]?.arrivalAirport?.caption} (
            {data.segments[0].arrivalAirport.uid})
          </S.Name>
        )}
      </S.Cities>

      {data.segments[1]?.arrivalAirport?.caption !== undefined ? (
        <S.Segments>1 пересадка </S.Segments>
      ) : (
        <S.Segments>Без пересадок </S.Segments>
      )}

      <S.Airline>Рейс выполняет: <b>{data.segments[0].airline.caption}</b></S.Airline>
    </S.Wrapper>
  )
}
