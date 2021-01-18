import styled from 'styled-components/macro'

export const NavigationBar = styled.nav`
    padding-bottom: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (min-width: 620px) {
        justify-content: center;
    }
    height: 84px;
    width: 100%;
    position: fixed;
    bottom: 0;
    box-shadow: var(--shadow-navigation);
    background-color: var(--white-main);
    z-index: 100;
`

export const LeftTab = styled.div`
    @media (min-width: 620px) {
        margin-right: 50px;
    }
`

export const RightTab = styled.div`
    @media (min-width: 620px) {
        margin-left: 50px;
    }
`