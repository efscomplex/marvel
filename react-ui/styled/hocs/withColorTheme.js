import styled, { css } from 'styled-components'

export const cssColorContextTheme = css `
   color: ${ props => props.theme.fg ? props.theme.fg : null };
   background-color: ${ props => props.theme.bg ? props.theme.bg : null };
   border: ${ props => props.theme.fg ? ('1px solid '+ props.theme.fg) : null };
`
export const cssColorTheme = css `
   color: ${ props => 'mute' in props 
      ? 'var(--text-mute, gray)' 
      : 'color' in props ? props.color : null
   };
   border: ${ props => 'border' in props ? props.border : null };
   background-color: ${ props => 'bg' in props ? props.bg : null };
`

export default function withColorTheme(Comp){
   return styled(Comp)`
      ${cssColorContextTheme}
      ${cssColorTheme}
   `
}