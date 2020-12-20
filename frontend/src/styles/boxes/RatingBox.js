import styled from 'styled-components/macro'

export const RatingBox = styled.div`
    margin-bottom: 58px;
    padding: 20px;
    text-align: left;
    border-radius: 30px;
    box-shadow:
        var(--lightshadow-darkblue),
        var(--darkshadow-darkblue);
`

export const RatingField = styled.div`
    margin-top: 20px;
    height: 22px;
    border-radius: 11px;
    background: #1B2A33;
    box-shadow:
        var(--lightshadow-rating),
        var(--darkshadow-rating);
`

export const RatingBar = styled.div`
    height: 22px;
    border-radius: 11px 0 0 11px;
`