import styled from 'styled-components/macro'

export const PhotoTag = styled.div`
    position: absolute;
    margin: 10px;
    padding: 4px 8px;
    border-radius: 12px;
    background: var(--darkgrey-85);
    :hover {
        margin: 8px;
        padding: 5px 9px;
        border-radius: 14px;
        font-size: 20px;
        background: var(--darkgrey-main);
        box-shadow: 4px 4px 8px rgb(32, 32, 32, 0.6);
    }
`

export default PhotoTag