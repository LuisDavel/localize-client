// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import * as S from './styles';
import { CSSObjectWithLabel } from 'react-select';
import { useState } from 'react';
import { api } from 'lib/axios';
import { SendPlane } from '@styled-icons/remix-fill';

export default function LandingPage() {
  const options = [
    { value: 'AC', label: 'AC' },
    { value: "'AL", label: 'AL' },
    { value: 'AP', label: 'AP' },
    { value: 'AM', label: 'AM' },
    { value: 'BA', label: 'BA' },
    { value: 'CE', label: 'CE' },
    { value: 'DF', label: 'DF' },
    { value: 'ES', label: 'ES' },
    { value: 'GO', label: 'GO' },
    { value: 'MA', label: 'MA' },
    { value: 'MT', label: 'MT' },
    { value: 'MS', label: 'MS' },
    { value: 'MG', label: 'MG' },
    { value: 'PA', label: 'PA' },
    { value: 'PB', label: 'PB' },
    { value: 'PR', label: 'PR' },
    { value: 'PE', label: 'PE' },
    { value: "'í", label: 'PI' },
    { value: 'RJ', label: 'RJ' },
    { value: 'RN', label: 'RN' },
    { value: 'RS', label: 'RS' },
    { value: 'RO', label: 'RO' },
    { value: 'RR', label: 'RR' },
    { value: 'SC', label: 'SC' },
    { value: 'SP', label: 'SP' },
    { value: 'SE', label: 'SE' },
    { value: 'TO', label: 'TO' }
  ];

  const [selectedOption, setSelectedOption] = useState([]);
  const [selectInput, setSelectedInput] = useState('');

  const handleChange = (option: { value: string; label: string }) => {
    setSelectedOption(option);
  };

  const handleChangeInpuit = (label: string) => {
    setSelectedInput(label);
    console.log(label);
  };

  const handleSubmit = async () => {
    try {
      const response = await api.post('newsletter', [
        {
          email: selectInput,
          uf: selectedOption.value
        }
      ]);
      alert(
        response.status != 200
          ? 'Não conseguimos realizar sua solicitação!'
          : 'Cadastramos o seu interesse com sucesso 🧡'
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Wrapper>
      <S.Content>
        <section style={{ maxWidth: '300px', height: 'auto' }}>
          <S.Image src={'./image/logo_nome.svg'} alt="Logo LocalizePet" />
        </section>
        <S.Container>
          <S.Article>
            <S.Text>Leve</S.Text>
            <S.Text>um pet ao seu</S.Text>
            <S.Text>
              <span>REENCONTRO.</span>
            </S.Text>
          </S.Article>
          <div style={{ maxWidth: '600px', height: 'auto' }}>
            <S.ImageLanding
              src="./image/landpagev2.svg"
              alt="Logo LocaizePet"
            />
          </div>
        </S.Container>

        <S.ContainerFooter>
          <S.TextFooter>
            Não a nada mais encantador do que ajudar um animal perdido.
          </S.TextFooter>
          <S.Linha>
            <S.TextFooter>
              <span>Cadastre-se na alpha do pingente.</span>
            </S.TextFooter>
            <S.LinhaFooter>
              <S.InputSelect
                placeholder="De onde você é ?"
                styles={{
                  singleValue: (provided: CSSObjectWithLabel) => ({
                    ...provided,
                    color: 'white', // Altere aqui para a cor desejada
                    fontSize: '2rem'
                  }),

                  placeholder: (provided: CSSObjectWithLabel) => ({
                    ...provided,
                    color: 'white'
                  }),

                  indicatorsContainer: (provided: CSSObjectWithLabel) => ({
                    ...provided,
                    display: 'none'
                  }),

                  control: (baseStyles: CSSObjectWithLabel) => ({
                    ...baseStyles,
                    height: '74px',
                    background: 'none',
                    color: 'white',
                    padding: '0 1rem',
                    borderRadius: '20px',
                    border: '2px solid white'
                  }),

                  menu: (provided: CSSObjectWithLabel) => ({
                    ...provided,
                    maxHeight: '100px' // Defina a altura máxima desejada para a lista suspensa
                  }),

                  menuList: (provided: CSSObjectWithLabel) => ({
                    ...provided,
                    maxHeight: '100px' // Defina a altura máxima desejada para a lista suspensa
                  })
                }}
                options={options}
                value={selectedOption}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                onChange={handleChange}
              />
              <S.ContainerInputSubmit>
                <S.InputSubmit
                  type="text"
                  autoComplete="none"
                  placeholder="Informe seu e-mail"
                  onChange={(e: { target: { value: string } }) =>
                    handleChangeInpuit(e.target.value)
                  }
                />

                <S.IconButton onClick={handleSubmit}>
                  <S.Icon>
                    <SendPlane />
                  </S.Icon>
                </S.IconButton>
              </S.ContainerInputSubmit>
            </S.LinhaFooter>
          </S.Linha>
        </S.ContainerFooter>
      </S.Content>
    </S.Wrapper>
  );
}
