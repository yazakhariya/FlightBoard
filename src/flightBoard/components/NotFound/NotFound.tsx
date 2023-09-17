import * as S from './NotFound.style'
import img from 'src/assets/notfound.png'

export default function NotFound() {
  return (
    <S.PageWrapper>
        <S.NotFoundMessage>Результаты по вашему запросу не найдены. Поменяйте параметры фильтров и попробуйте еще раз.</S.NotFoundMessage>
        <S.Img src={img} />
    </S.PageWrapper>
  )
}