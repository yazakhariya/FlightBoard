import UiButton from 'src/components/UiButton/UiButton'
import CardHead from './components/CardHead/CardHead'
import * as S from './CardComponent.style'
import CardBody from './components/CardBody/CardBody'

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
