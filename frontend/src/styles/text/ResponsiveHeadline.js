import styled from 'styled-components/macro'

const ResponsiveHeadline = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px;
  @media (min-height: 740px) {
      margin-bottom: 50px;
  };
`

export default ResponsiveHeadline

export const HeaderLinkLeft = styled.h3`
  margin: 0;
  width: 228px;
  text-align: left;
  color: var(--white-50);
  @media (max-width: 719px) {
    display: none;
  };
`

export const HeaderLinkRight = styled.h3`
  margin: 0;
  width: 200px;
  text-align: right;
  color: var(--white-50);
  @media (max-width: 719px) {
    display: none;
  };
`

export const HeaderIconLeft = styled.div`
  @media (min-width: 720px) {
    display: none;
  };
`

export const HeaderIconRight = styled.div`
  @media (min-width: 720px) {
    display: absolute;
    margin: -26px 0 0 210px;
  };
`