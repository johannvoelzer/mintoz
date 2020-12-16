import styled from 'styled-components/macro'

const GoogleButton = styled.button`
margin: 18px 20px 0;
padding: 12px;
width: 186px;
font-weight: 600;
border: none;
border-radius: 20px;
background: var(--darkblue-main);
color: var(--white-50);
cursor: pointer;
:hover {
  color: var(--white-main);
}
box-shadow:
  var(--lightshadow-darkblue),
  var(--darkshadow-darkblue);
`

export default GoogleButton