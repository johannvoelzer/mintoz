import styled from 'styled-components/macro'

const InformationBox = styled.div`
    display: inline-block;
    vertical-align: top;
    margin: 30px;
    padding: 20px;
    width: 400px;
    text-align: left;
    max-width: calc(100% - 60px);
    border-radius: 30px;
    box-shadow:
        var(--lightshadow-darkblue),
        var(--darkshadow-darkblue);
`

export default InformationBox