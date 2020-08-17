import styled from 'styled-components'

export const minWidth = (breakpoint, attrs) => `
   @media (min-width: ${breakpoint}){
      ${attrs}
   }
`
export const maxWidth = (breakpoint, attrs) => `
   @media (max-width: ${breakpoint}){
      ${attrs}
   }
`

export default styled.div`
   ${(props) =>
      'maxWidth' in props ? maxWidth(props.maxWidth, props.attrs) : null}
   ${(props) =>
      'minWidth' in props ? minWidth(props.minWidth, props.attrs) : null}
`
