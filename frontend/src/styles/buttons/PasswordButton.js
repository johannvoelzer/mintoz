import styled from 'styled-components/macro'

const PasswordButton = styled.button`
  margin-bottom: 20px;
  padding: 12px;
  width: 64px;
  font-weight: 600;
  border: none;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
  background: var(--green-50);
  color: #5EAFA5;
  :enabled {
    background: var(--green-main);
    color: var(--white-main);
`

export default PasswordButton