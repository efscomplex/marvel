import styled, { css } from 'styled-components'

const cssBackgroundStyles = css `
   background-image: ${
      (props) => 'src' in props 
         ? `url('${props.src}')` 
         : null
   };
   background-image: ${(props) => props.image};
   background-repeat: ${
      props => props.repeat || 'no-repeat'
   };
   background-size: cover;
   background-attachment: ${ props => props.attach || 'scroll'};
   background: ${ props => props.background };
`

export default function withBackground(Comp){
   return styled(Comp)`
      ${cssBackgroundStyles}
   `
}