import styled from 'styled-components/macro'

export const AuthenticationLink = styled.div`
  margin-top: 50px;
  @media (max-height: 580px) {
      margin-top: 30px
  };
  @media (min-height: 720px) {
    margin-top: 80px
  };
  margin-bottom: -50px;
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: var(--white-25);
  @media (max-width: 370px) {
    font-size: 14px;
  }
`

export const LinkText = styled.p`
  margin: 0 10px 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--white-50);
  :hover {color: var(--white-main)};
  @media (max-width: 370px) {
    font-size: 14px;
  };
`