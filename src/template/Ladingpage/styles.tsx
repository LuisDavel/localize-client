import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import Select from 'react-select';

export const Content = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.terciary};
    padding: ${theme.spacings.xxlarge};
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: space-evenly;
    height: 100vh;
    width: 100vw;
  `}
`;

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.terciary};
    height: 100vh;
    width: 100vw;
  `}
`;

export const Image = styled.img`
  width: 300px;

  ${media.lessThan('medium')`
    width: 250px;
  `}
`;
export const ImageLanding = styled.img`
  width: 400px;

  ${media.lessThan('medium')`
    width: 250px;
  `}
  ${media.greaterThan('large')`
    width: 500px;
  `}
`;

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: end;
  width: 100%;

  ${media.lessThan('medium')`
     align-items: center ;
  `}
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${'58px'};
    font-family: ${theme.font.family.nunito};
    font-weight: 600;
    margin-top: -20px;

    span {
      color: ${theme.colors.primary};
      font-weight: 900;
      font-size: ${'62px'};
    }
  `}

  ${media.lessThan('medium')`
      font-size: ${'40px'};
        /* margin-top: -18px; */
      span {
          font-size: ${'38px'};
      }
  `}
`;

export const ContainerFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const TextFooter = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family.nunito};
    font-weight: 600;
    margin-bottom: 2rem;
    min-width: 263px;
    max-width: 60%;
    span {
      color: ${theme.colors.secondary};
    }

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`;

export const IconButton = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    padding: 16px;
    border-radius: 20px;
    cursor: pointer;
  `}
`;

export const ContainerInputSubmit = styled.section`
  display: flex;
  padding: 1rem;
  border-radius: 20px;
  background: white;
  justify-content: space-between;
  ${media.lessThan('small')`
    width: 100%;
  `}
`;

export const InputSubmit = styled.input`
  background: white;
  border: none;
  outline: none;
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.terciary};
    & > svg {
      width: 2.2rem;
      height: 100%;
    }
  `}
`;

export const InputSelect = styled(Select)`
  ${({ theme }) => css`
    font-family: ${theme.font.family.nunito};
    ${media.lessThan('small')`
      width: 100%;
    `}
  `}
`;

export const Linha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
`;

export const LinhaFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;
