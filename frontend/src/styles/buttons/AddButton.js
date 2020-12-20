import styled from'styled-components/macro'

const AddButton = styled.button`
margin: 30px;
padding: 12px;
width: 140px;
max-width: calc(100% - 210px);
font-size: 16px;
font-weight: 900;
cursor: pointer;
border: none;
border-radius: 20px;
background: var(--green-main);
color: white;
opacity: 80%;
:hover {opacity: 100%;};
box-shadow:
  var(--lightshadow-button),
  var(--darkshadow-button);
`

export default AddButton