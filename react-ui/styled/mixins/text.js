import { css } from 'styled-components'

const applyFontWeightStyle = props => {
   if (props.weight) return props.weight
   if( props.bold ) return 'bold'

   return null
}

export const cssTextAlign = css`
   text-align: ${ props => 'align' in props ? props.align : null };
   text-align: ${ props => 'center' in props ? 'center' : null };
   text-align: ${ props => 'left' in props ? 'left' : null };
   text-align: ${ props => 'right' in props ? 'right' : null };
   text-align: ${ props => 'justify' in props ? 'justify' : null };
`

export const cssText = css`
   font: ${ props => props.font};
   font-family: ${ props => props.family};
   text-transform: ${ props => 'transform' in props ? props.transform : null };
   text-transform: ${ props => 'lowercase' in props ? 'lowercase' : null };
   text-transform: ${ props => 'capitalize' in props ? 'capitalize' : null };
   font-style: ${ props => 'italic' in props ? 'italic' : null };
   font-weight: ${ applyFontWeightStyle };
   font-size: ${ props => 'size' in props ? props.size : null };
   text-decoration: ${ props => 'decoration' in props ? props.decoration : null };
   text-decoration: ${ props => 'underline' in props ? 'underline' : null };
   line-height: ${ props => props.height};
`