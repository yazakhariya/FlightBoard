import UiButton from 'src/components/UiButton/UiButton'
import * as S from './CardsBox.style'
import { flights } from 'src/mockData/flights'
import CardHead from './components/Head/CardHead'
import CardBody from './components/Body/CardBody'

export default function CardsBox() {
  const flight = flights.map((item) =>
    item.result.flights.map((card) => card.flight)
  )

  function handleButtonClick() {
 //todo
  }

  return (
    <S.CardsBoxWrapper>
      {flight[0].map((card, i: number) => { 

        return (
          <S.Card key={i}>
            <CardHead data={card} />
            <CardBody data={card} />
            <UiButton onClick={handleButtonClick} children={'Выбрать'} />
          </S.Card>
        )
      })}
    </S.CardsBoxWrapper>
  )
}
