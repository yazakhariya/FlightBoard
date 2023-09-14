import UiButton from 'src/components/UiButton/UiButton'
import CardBody from './components/Body/CardBody'
import CardHead from './components/Head/CardHead'
import * as S from './CardsBox.style'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Component(card: any, i: number) {
  return (
    <S.Card key={i}>
      <CardHead data={card.flight} />
      <CardBody data={card.flight} />
      <UiButton children={'Выбрать'} />
    </S.Card>
  )
}
