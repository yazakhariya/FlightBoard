import * as S from './NotFound.style'
import img from 'src/assets/pngwing.png'
// 404 error
export default function NotFound() {
  return (
    <S.PageWrapper>
      <S.Img src={img} />
    </S.PageWrapper>
  )
}
