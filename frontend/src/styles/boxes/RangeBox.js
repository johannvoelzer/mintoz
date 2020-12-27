import styled from 'styled-components/macro'

export const RangeBox = styled.div`
    vertical-align: top;
    padding: 20px;
    border-radius: 30px;
    box-shadow:
        var(--lightshadow-flat),
        var(--darkshadow-flat);
`

export const PriceBullet = styled.div`
    position: absolute;
    margin: -92px 0 0 -10px;
    width: 20px;
    height: 14px;
    border-radius: 7px;
    background-color: var(--yellow-main);
    box-shadow:
        var(--lightshadow-darkblue),
        var(--darkshadow-button);
`

export const Ma50Bullet = styled.div`
    display: inline-block;
    margin: -4px 0 0 19px;
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: var(--darkgrey-main);
`

export const Ma50Line = styled.div`
    margin: -15px 0 0 -22px;
    height: 40px;
    background-image: linear-gradient(var(--green-50), var(--green-50));
    background-size: 2px 40px;
    background-repeat: no-repeat;
    background-position: center;
`

export const Ma50Tag = styled.p`
    display: inline-block;
    margin-top: 30px;
    padding: 0 2px;
    width: 46px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    color: var(--white-main);
    background-color: var(--green-main);
    box-shadow:
        var(--lightshadow-tag),
        var(--darkshadow-tag);
`

export const Ma200Bullet = styled.div`
    display: inline-block;
    margin: -4px 0 0 23px;
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: var(--darkgrey-main);
`

export const Ma200Line = styled.div`
    margin: -40px 0 10px -26px;
    height: 75px;
    background-image: linear-gradient(var(--red-50), var(--red-50));
    background-size: 2px 75px;
    background-repeat: no-repeat;
    background-position: center;
`

export const Ma200Tag = styled.p`
    display: inline-block;
    margin-top: 65px;
    padding: 0 2px;
    width: 54px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    color: var(--white-main);
    background-color: var(--red-main);
    box-shadow:
        var(--lightshadow-tag),
        var(--darkshadow-tag);
`