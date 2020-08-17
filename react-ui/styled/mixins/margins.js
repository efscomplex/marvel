import { css } from 'styled-components'

export const cssMargins = css`
   margin: ${props => 'margin' in props ? props.margin : null };
   margin-left: ${ props => 'mx' in props ?  props.mx : null };
   margin-right: ${ props => 'mx' in props ? props.mx : null };
   margin-top: ${ props => 'my' in props ? props.my : null };
   margin-bottom: ${ props => 'my' in props ? props.my : null };
   margin-top: ${props => 'mt' in props ? props.mt : null };
   margin-bottom: ${props => 'mb' in props ? props.mb : null };
   margin-right: ${props => 'mr' in props ? props.mr : null };
   margin-left: ${props => 'ml' in props ? props.ml : null };
`
export const cssPaddings = css`
   padding: ${props => 'padding' in props ? props.padding : null };
   padding-left: ${ props => 'px' in props ?  props.px : null };
   padding-right: ${ props => 'px' in props ? props.px : null };
   padding-top: ${ props => 'py' in props ? props.py : null };
   padding-bottom: ${ props => 'py' in props ? props.py : null };
   padding-top: ${props => 'pt' in props ? props.pt : null };
   padding-bottom: ${props => 'pb' in props ? props.pb : null };
   padding-right: ${props => 'pr' in props ? props.pr : null };
   padding-left: ${props => 'pl' in props ? props.pl : null };
`
