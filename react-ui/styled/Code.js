import styled from 'styled-components'

export default styled.code`
   padding: 1rem 1.6rem 1rem .5rem;
   background-color: ${props => props.dark ? 'var(--bg-c-dark,#4b5b74)' : 'gray'};
   color: ${ props => props.dark ? 'white' : 'inherit'};
   border-radius: 6px;
   box-shadow: 15px 0 0  inset palevioletred;
`