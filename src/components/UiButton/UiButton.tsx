import * as S from './UiButton.style'

type Props = {
  onClick?: () => void
  children: React.ReactNode
}

const UiButton = ({ onClick, children }: Props) => {
  return (
    <S.Button onClick={onClick}>
      {children}
    </S.Button>
  )
}

export default UiButton