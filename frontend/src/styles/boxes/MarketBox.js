import styled from 'styled-components/macro'

export const MarketBox = styled.div`
    margin: 30px 0;
    padding: 20px 0 2px;
    width: 100%;
    @media (min-height: 720px) {
        margin-bottom: 60px;
    };
    box-shadow:
        var(--lightshadow-darkblue),
        var(--darkshadow-darkblue);
    .scrolling-wrapper {
        &::-webkit-scrollbar {
            display: none;
        }
    };
`


export const MarketCard = styled.div`
    margin-bottom: 7px;
    padding: 6px 0 0 10px;
    width: 220px;
    text-align: left;
    border-radius: 20px;
    background: var(--white-10);
    opacity: 90%;
    :hover {
        margin-bottom: -7px;
        box-shadow: 4px 4px 20px rgb(32, 32, 32, 0.6);
        opacity: 100%;
        width: 224px;
        margin: -1px -2px;
        font-size: 102%;
        h4 {
            margin-bottom: 7px;
        }
        div {
            margin-top: -1px;
        }
        div h4 {
            margin-bottom: 0;
            line-height: 26px;
            width: 102px;
        }
    };
`

export const CardDetails = styled.div`
    display: flex;
    vertical-align: bottom;
    margin-top: 6px;
    display: flex;
    justify-content: space-between;
`

export const DetailsChange = styled.h4`
    display: flex;
    vertical-align: bottom;
    padding: 20px 0 20px 20px;
    width: 100px;
    border-radius: 80px 0 24px 0;
`