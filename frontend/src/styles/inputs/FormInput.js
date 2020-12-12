import styled from 'styled-components/macro'

const FormInput = styled.input`
margin: 20px 0 0;
padding: 12px;
width: 380px;
max-width: calc(100% - 40px);
border: none;
border-radius: 20px;
background: var(--white-85);
color: var(--darkgrey-main);
::placeholder {color: var(--grey-main)};
:enabled {font-weight: 600};
box-shadow:
  var(--lightshadow-input),
  var(--darkshadow-input);
`

export default FormInput