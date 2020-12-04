import styled from 'styled-components/macro';

const Note = styled.p`
  margin-top: 0;
  color: var(--white-25);
  font-size: 16px;
  @media (max-width: 370px) {
    font-size: 14px;
  }
`

export default Note;