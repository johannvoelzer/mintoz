import styled from 'styled-components/macro'


export const ToggleBar = styled.hr`
    display: inline-block;
    margin: 30px 0 60px;
    @media (min-width: 920px) {
        margin: 60px;
    };
    width: 124px;
    height: 36px;
    border-radius: 18px;
    background-color: var(--darkgrey-25);
`

export const WatchlistToggle = styled.div`
    margin: -98px 0 30px;
    display: flex;
    justify-content: center;
`

export const WatchlistTab = styled.h5`
    line-height: 28px;
    width: 58px;
    height: 28px;
    color: var(--white-main);
    border-radius: 15px;
    cursor: pointer;
    opacity: ${props => (props.active ? '100%' : '40%')};
    background: ${props => (props.active ? 'var(--green-90)' : 'rgb(255, 255, 255, 0)')};
    box-shadow: ${props => (props.active ? 'var(--lightshadow-toggle), var(--darkshadow-toggle);' : 'rgb(255, 255, 255, 0)')};
    :hover {opacity: 100%};
    transition: opacity 0.3s linear;
`

export const WatchlistContent = styled.div`
  ${props => (props.active ? "" : "display:none")}
`