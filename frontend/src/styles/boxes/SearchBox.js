import styled from 'styled-components/macro'

export const SearchBox = styled.div`
    display: inline-block;
    width: 400px;
    @media (min-width: 920px) {
        width: 720px;
    };
    max-width: calc(100% - 60px);
    border-radius: 30px;
    background-color: var(--darkblue-dark);
    box-shadow:
        var(--lightshadow-darkblue),
        var(--darkshadow-button);
`

export const SearchField = styled.input`
    margin-top: 6px;
    padding: 22px;
    width: 400px;
    @media (min-width: 920px) {
        width: 710px;
    };
    max-width: calc(100% - 12px);
    border: none;
    border-radius: 26px;
    background: var(--white-85);
    color: var(--darkgrey-main);
    ::placeholder {color: var(--grey-main)};
    :enabled {font-weight: 600};
    box-shadow:
        var(--lightshadow-input),
        var(--darkshadow-input);
`

export const SearchResults = styled.div`
    margin: 6px 0;
    width: 330px;
    text-align: left;
    @media (min-width: 920px) {
        padding-left: 160px;
        width: 560px;
    };
`