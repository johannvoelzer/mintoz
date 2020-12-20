import styled from 'styled-components/macro'

export const CollectionTab = styled.h4`
    margin-bottom: 40px;
    padding: 0 20px;
    cursor: pointer;
    color: ${props => (props.active ? 'var(--yellow-main)' : 'var(--white-75)')};
    margin-top: ${props => (props.active ? '0' : '6px')};
    font-size: ${props => (props.active ? '22px' : '16px')};
    opacity: ${props => (props.active ? '100%' : '40%')};
    :hover {opacity: 100%;};
    transition:
        opacity 0.2s ease-in-out,
`

export const CollectionContent = styled.div`
  ${props => (props.active ? "" : "display:none")}
`