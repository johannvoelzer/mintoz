import styled from 'styled-components/macro'

const ListBox = styled.div`
    display: inline-block;
    margin: 0 30px 30px;
    width: 400px;
    text-align: left;
    max-width: calc(100% - 60px);
    border-radius: 30px;
    box-shadow:
        var(--lightshadow-darkblue),
        var(--darkshadow-darkblue);
`

export default ListBox