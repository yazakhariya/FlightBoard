import Back from './components/Back/Back'
import Forward from './components/Forward/Forward'
import { DataType } from './types'

type Props = {
    data: DataType
}

export default function CardBody({ data }: Props) {
  return (
    <>
      <Forward data={data.legs[0]} />
      <Back data={data.legs[1]} />
    </>
  )
}
