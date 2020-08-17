import { css } from 'styled-components'

export const cssSizes =  css `
   width: ${ props => props.width};
   width: ${ props => 'wClamp' in props ? `clamp(${props.wClamp})` : null};
   max-width: ${ props => props.maxW};
   min-width: ${ props => props.minW};
   
   height: ${ props => props.height};
   height: ${ props => 'hClamp' in props ? `clamp(${props.hClamp})` : null};
   max-height: ${ props => props.maxH};
   min-height: ${ props => props.minH};
`