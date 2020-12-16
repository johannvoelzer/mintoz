import styled from 'styled-components/macro'

const Description = styled.div`
    margin-top: ${(props) => (props.active ? '30px' : '0')};
    font-size: ${(props) => (props.active ? '16px' : '0px')};
    transition: font-size 1s ease-in-out, margin-top 0.5s ease-in-out;
    @media (min-width: 1380px) {
        display: none;
    }
`

export default Description