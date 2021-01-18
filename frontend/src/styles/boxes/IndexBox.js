import styled from 'styled-components/macro'
    
const IndexBox = styled.div`
    display: inline-block;
    vertical-align: top;
    border-radius: 30px;
    max-width: calc(100% - 60px);
    @media (min-height: 740px) {
        margin-bottom: 30px;
    };
    background: var(--darkblue-main);
    box-shadow:
        var(--lightshadow-darkblue),
        var(--darkshadow-darkblue);
`

export default IndexBox

export const IndexTabs = styled.div`
    display: flex;
    justify-content: center;
    padding: 16px;
`

export const IndexTab = styled.h4`
    margin: 10px;
    border-radius: 20px;
    color: var(--white-main);
    cursor: pointer;
    opacity: ${props => (props.active ? '100%' : '40%')};
    @media (min-width: 300px) {
        margin: 4px 10px;
        padding: 6px 12px;
        opacity: 100%;
        color: ${props => (props.active ? 'var(--white-25)' : 'var(--white-75)')};
        box-shadow: ${props => (props.active ?
            'var(--lightshadow-flat), var(--darkshadow-flat)' :
            'var(--lightshadow-small), var(--darkshadow-small)')};
    }
    :hover {opacity: 100%;};
    transition:
        opacity 0.2s ease-in-out,
        color 0.2s ease-in-out,
        box-shadow 0.3s ease-in-out;
`

export const IndexCard = styled.div`
    display: inline-block;
    margin: 12px 12px 0;
    padding: 6px 12px;
    width: 300px;
    @media (min-width: 528px) {
        width: 210px;
    };
    text-align: left;
    max-width: calc(100% - 24px);
    border-radius: 20px;
    background: var(--white-85);
    box-shadow:
        var(--lightshadow-input),
        var(--darkshadow-input);
`

export const IndexContent = styled.div`
  ${props => (props.active ? "" : "display:none")}
`