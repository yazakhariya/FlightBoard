// import { flights } from 'src/mockData/flights'
import * as S from './FiltersBox.style'
import AirlineFilter from './components/Airline/AirlineFilter'
import CostFilter from './components/Cost/CostFilter'
import FilterSegments from './components/Filter/FilterSegments'
import SortPrice from './components/Sort/SortPrice'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FiltersBox({ props, priceMin, priceMax, seg }: any) {
  return (
    <S.FiltersWrapper>
      <SortPrice propSort={props} />
      <FilterSegments seg={seg} />
      <CostFilter priceMin={priceMin} priceMax={priceMax} />
      <AirlineFilter />
    </S.FiltersWrapper>
  )
}
