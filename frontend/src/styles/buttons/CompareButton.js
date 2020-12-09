import styled from 'styled-components/macro';

const CompareButton = styled.button`
    display: block;
    margin: 10px auto 0;
    padding: 5px;
    width: 90px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    background: var(--green-main);
    color: #FFFFFF;
    cursor: pointer;
    opacity: 80%;
    :hover {opacity: 100%;}
`

export default CompareButton;