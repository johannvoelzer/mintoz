import styled from 'styled-components/macro';

const ChartBox = styled.div`
    display: inline-block;
    margin-top: 30px;
    padding: 10px 0;
    width: 400px;
    max-width: 100%;
    border-radius: 30px;
    text-align: left;
    background: var(--white-main);
    box-shadow:
        var(--lightshadow-chart),
        var(--darkshadow-chart);
`

export default ChartBox;