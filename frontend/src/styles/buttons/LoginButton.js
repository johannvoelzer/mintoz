import styled from 'styled-components/macro'

const LoginButton = styled.button`
  margin: 20px 0;
  padding: 12px;
  width: 380px;
  max-width: calc(100% - 40px);
  font-weight: 600;
  border: none;
  border-radius: 20px;
  background: var(--green-50);
  color: #5EAFA5;
  :enabled {
    background: var(--green-main);
    color: var(--white-main);
    cursor: pointer;
`

export default LoginButton