import styled from 'styled-components/macro'

const PasswordField = styled.input`
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
    var(--lightshadow-input),
    var(--darkshadow-input);
`

export default PasswordField