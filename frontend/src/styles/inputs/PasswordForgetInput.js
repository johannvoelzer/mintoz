import styled from 'styled-components/macro'

const PasswordForgetInput = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  width: 316px;
  max-width: calc(100% - 104px);
  border: none;
  border-radius: 20px 0 0 20px;
  background: var(--white-85);
  color: var(--darkgrey-main);
  ::placeholder {color: var(--grey-main)};
  :enabled {font-weight: 600};
  box-shadow:
    inset var(--lightshadow-input),
    inset var(--darkshadow-input);
`

export default PasswordForgetInput