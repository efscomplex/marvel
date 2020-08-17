import { css } from 'styled-components'

export const cssAlignSelf = css `
   align-self: ${ props => props.alignSelf};
   align-self: ${ props => props.align};
   align-self: ${ props => props.flexEnd};
   align-self: ${ props => props.stretch};
   align-self: ${ props => props.baseline};
`
export const cssFlexBasis = css `
   flex-basis: ${ props => props.basis};
`