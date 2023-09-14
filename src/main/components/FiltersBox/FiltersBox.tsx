// import { flights } from 'src/mockData/flights'
import * as S from './FiltersBox.style'
import AirlineFilter from './components/Airline/AirlineFilter'
import CostFilter from './components/Cost/CostFilter'
import FilterSegments from './components/Filter/FilterSegments'
import SortPrice from './components/Sort/SortPrice'

export default function FiltersBox() {

  return (
    <S.FiltersWrapper>
      <SortPrice />
      <FilterSegments />
      <CostFilter />
      <AirlineFilter />
    </S.FiltersWrapper>
  )
}
