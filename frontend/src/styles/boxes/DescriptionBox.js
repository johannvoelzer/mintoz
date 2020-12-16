import styled from 'styled-components/macro'

const DescriptionBox = styled.div`
    display: inline-block;
    vertical-align: top;
    margin: 30px;
    padding: 4px 20px 20px;
    width: 860px;
    max-width: calc(100% - 60px);
    text-align: left;
    border-radius: 30px;
    box-shadow:
        var(--lightshadow-darkblue),
        var(--darkshadow-darkblue);
    @media (max-width: 1379px) {
        display: none;
    }
`

export default DescriptionBox