import styled from 'styled-components/macro'

const StartScreen = styled.img`
    margin: 0 30px -30px -30px;
    width: 800px;
    height: 600px;
    max-width: 60%;
    @media (max-width: 1319px) {
        display: none;
    };
    @media (min-width: 1600px) {
        margin-right: 100px;
    };
    background-image: radial-gradient(var(--green-10) 65%, transparent 65%);
`

export default StartScreen