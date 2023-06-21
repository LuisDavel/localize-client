import * as S from './styles';

export type CardPetsProps = {
  name: string
  image: string
  typeAnimal: number
  typeCard: number
}


  const CardPets = ({name, image, typeAnimal, typeCard }: CardPetsProps) => {
  image = 'data:image/jpeg;base64,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'
  return (
    <>
    {typeCard == 1 ?
      (
        <S.Wrapper typeAnimal={typeAnimal}>
          <S.Imag typeAnimal={typeAnimal} src={image} alt={name} />
          <S.IconWrap typeAnimal={typeAnimal}>
            <img src={`./image/icon/${typeAnimal == 1 ? 'dog_preenchido' : 'cat_preenchido'}.svg`} alt="logo" />
          </S.IconWrap>
          <S.Text typeAnimal={typeAnimal}>{name}</S.Text>
        </S.Wrapper>
      ) : (
        <S.Wrapper typeAnimal={typeAnimal}>
          <S.ContainerNull />
          <S.IconWrap typeAnimal={typeAnimal}>
            <img src={`./image/icon/mais.svg`} alt="logo" />
          </S.IconWrap>
          <S.Text typeAnimal={typeAnimal}>{name}</S.Text>
        </S.Wrapper>
      )
    }
   </>
  )
};

export default CardPets;