import styled from 'styled-components/macro'

const Logo = styled.div`
  @media (max-height: 660px) {
    display: none;
  }
  @media (min-height: 720px) {
    margin: 30px;
  }
`

export default Logo