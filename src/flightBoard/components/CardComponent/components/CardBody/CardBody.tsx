import DownPart from './components/DownPart/DownPart'
import UpperPart from './components/UpperPart/UpperPart'
import { Legs } from './types'

type Props = {
  data: Legs
}

export default function CardBody({ data }: Props) {
  return (
    <>
      <UpperPart data={data.legs[0]} />
      <DownPart data={data.legs[1]} />
    </>
  )
}
