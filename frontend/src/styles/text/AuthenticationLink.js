import styled from 'styled-components/macro';

const AuthenticationLink = styled.div`
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

export default AuthenticationLink;