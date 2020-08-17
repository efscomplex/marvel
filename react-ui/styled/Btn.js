import styled, { css } from 'styled-components'


const cssColorContextTheme = css `
   color: ${ props => props.theme.fg ? props.theme.fg : null };
   background-color: ${ props => props.theme.bg ? props.theme.bg : null };
   border: ${ props => props.theme.fg ? ('1px solid '+ props.theme.fg) : null };
`
const cssBootstrappedTheme = css `
   background-color: ${ props => 'primary' in props ? 'var(--primary)' : null};
   background-color: ${ props => 'secondary' in props ? 'var(--secondary)' : null};
   background-color: ${ props => 'warning' in props ? 'var(--warning)' : null};
   background-color: ${ props => 'info' in props ? 'var(--info)' : null};
   background-color: ${ props => 'danger' in props ? 'var(--danger)' : null};
   background-color: ${ props => 'success' in props ? 'var(--success)' : null};
`

export const cssColorTheme = css `
   color: ${ props => 'mute' in props 
      ? 'var(--text-mute, gray)' 
      : 'color' in props ? props.color : null
   };
   border: ${ props => 'border' in props ? props.border : null };
   background-color: ${ props => 'bg' in props ? props.bg : null };
`

export default styled.button`
   display: block;
   min-width: fit-content;
   width: fit-content;
   width: ${ props => 'fluid' in props ? '100%' : null};
   margin: ${ props => 'center' in props ? 'auto' : null};
   font-size: 1rem;
   line-height: 1rem;
   padding: .6rem 1.4rem;
   transition: color .4s ease, background-color .4s ease;
   border-radius: ${props => props.radius || '4px'};
   ${ cssColorContextTheme}
   ${ cssColorTheme }
   ${ cssBootstrappedTheme }
   pointer-events: ${ props => 'disabled' in props ? 'none' : null};
   &:focus {
      outline: initial;
   }
`