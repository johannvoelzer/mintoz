import styled from 'styled-components/macro';

const LinkText = styled.p`
  margin: 0 10px 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--white-50);
  :hover {color: var(--white-main)};
  @media (max-width: 370px) {
    font-size: 14px;
  };
`

export default LinkText;