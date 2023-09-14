
import Back from './components/Back/Back'
import Forward from './components/Forward/Forward'
import { Legs } from './types'


type Props = {
    data: Legs
}

export default function CardBody({ data }: Props) {
  return (
    <>
      <Forward data={data.legs[0]} />
      <Back data={data.legs[1]} />
    </>
  )
}
