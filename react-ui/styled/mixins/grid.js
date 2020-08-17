import { css } from 'styled-components'
export const cssGrid = css `
   display: grid;
   grid-gap: ${props => props.gap};
   grid-template-columns: ${props => props.cols};
   grid-template-rows: ${props => props.rows};
   grid-template-areas: ${props => props.areas};
   grid-auto-flow: ${props => props.flow};
   justify-items: ${ props => props.justify};
   align-items: ${ props => props.align};
`