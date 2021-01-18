import styled from 'styled-components/macro'

const PerformanceBox = styled.div`
    display: inline-block;
    margin: 30px 30px 0;
    padding: 12px 20px;
    width: 320px;
    text-align: left;
    max-width: calc(100% - 60px);
    border-radius: 30px;
    box-shadow:
        var(--lightshadow-darkblue),
        var(--darkshadow-darkblue);
`

export default PerformanceBox