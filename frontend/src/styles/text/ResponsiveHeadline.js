import styled from 'styled-components/macro'

const ResponsiveHeadline = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 30px;
    @media (min-height: 740px) {
        margin-bottom: 50px;
    };
  }
`

export default ResponsiveHeadline