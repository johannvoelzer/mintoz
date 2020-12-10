import styled from 'styled-components/macro'

const ExploreButton = styled.div`
    display: flex;
    justify-content: center;
    height: 50px;
    width: 50px;
    border: 2px;
    border-radius: 25px;
    box-shadow:  var(--lightshadow-white), var(--darkshadow-white);
    .buttonClick:active {
        align-self: center;
        padding: 0 6px;
        height: 46px;
        width: 46px;
        border-radius: 23px;
        box-shadow: inset var(--darkshadow-white), inset var(--lightshadow-white);
    }
`

export default ExploreButton