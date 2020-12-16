import styled from 'styled-components/macro'

const CompareButton = styled.button`
    display: block;
    margin: 10px auto 0;
    padding: 10px 20px;
    font-weight: 600;
    border: none;
    border-radius: 12px;
    background: var(--green-main);
    color: white;
    cursor: pointer;
    opacity: 80%;
    :hover {opacity: 100%;}
`

export default CompareButton