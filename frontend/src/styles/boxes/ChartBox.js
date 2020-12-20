import styled from 'styled-components/macro'
    
const ChartBox = styled.div`
    display: inline-block;
    vertical-align: top;
    margin: 30px;
    width: 400px;
    border-radius: 30px;
    max-width: calc(100% - 60px);
    box-shadow:
        var(--lightshadow-darkblue),
        var(--darkshadow-darkblue);
`

export default ChartBox

export const ChartBoxTop = styled.div`
    padding-bottom: 18px;
    margin: 10px 12px 0;
    border-radius: 20px;
    text-align: left;
    border: 4px 4px 0 solid var(--darkblue-main);
    background: var(--white-85);
    box-shadow:
        var(--lightshadow-input),
        var(--darkshadow-input);
`

export const ChartTabs = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 16px;
`

export const ChartTab = styled.h5`
    color: var(--white-main);
    cursor: pointer;
    opacity: ${props => (props.active ? '100%' : '40%')};
    :hover {opacity: 100%;};
    transition: opacity 0.2s ease-in-out;
`

export const ChartContent = styled.div`
  ${props => (props.active ? "" : "display:none")}
`