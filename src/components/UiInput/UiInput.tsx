import * as S from './UiInput.style'

type Props = {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type: string
}

const UiInput = ({ value, onChange, placeholder, type }: Props) => {
  return <S.Input value={value} onChange={onChange} placeholder={placeholder} type={type} />
}

export default UiInput