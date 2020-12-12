import styled from'styled-components/macro'

const RouteButton = styled.button`
margin: 10px;
padding: 12px;
width: 160px;
max-width: calc(100% - 60px);
font-weight: 900;
cursor: pointer;
border: none;
border-radius: 20px;
background: var(--green-main);
color: var(--white-main);
box-shadow:
  var(--lightshadow-button),
  var(--darkshadow-button)};
`

export default RouteButton