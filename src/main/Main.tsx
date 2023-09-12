import * as S from './Main.style'
import CardsBox from './components/CardsBox/CardsBox'
import FiltersBox from './components/FiltersBox/FiltersBox'

export default function Main() {
  
  return (
    <S.MainWrapper>
      <FiltersBox />
      <CardsBox />
    </S.MainWrapper>
  )
}
