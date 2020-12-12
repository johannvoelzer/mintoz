import styled from 'styled-components/macro'

const NavigationBar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (min-width: 768px) {
        justify-content: center;
        gap: 50px;
    }
    height: 74px;
    width: 100%;
    position: fixed;
    bottom: 0;
    box-shadow: var(--shadow-navigation);
    background-color: var(--white-main);
    z-index: 100;
`

export default NavigationBar