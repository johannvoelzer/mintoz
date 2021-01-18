import styled from 'styled-components/macro'

export const SectorBox = styled.div`
    display: inline-block;
    padding: 10px;
    width: 400px;
    @media (min-width: 920px) {
        width: 720px;
    };
    max-width: calc(100% - 60px);
    border-radius: 30px;
    background-color: var(--darkblue-dark);
    box-shadow:
        var(--lightshadow-button),
        var(--darkshadow-button);
`

export const SectorTags = styled.div`
    display: inline-block;
    margin: 4px;
    padding: 2px 6px;
    font-size: 14px;
    @media (min-width: 920px) {
        font-size: 16px;
        padding: 4px 8px;
        border-radius: 12px;
    };
    font-weight: 600;
    border-radius: 10px;
    background-color: var(--blue-60);
`