import styled from 'styled-components/macro'

const InformationBox = styled.div`
    display: inline-block;
    vertical-align: top;
    margin: 30px;
    padding: 20px;
    width: 400px;
    max-width: calc(100% - 60px);
    text-align: left;
    border-radius: 30px;
    box-shadow:
        var(--lightshadow-darkblue),
        var(--darkshadow-darkblue);
`

export default InformationBox