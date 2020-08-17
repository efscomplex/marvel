import { css } from 'styled-components'

export const cssAnimatedProps = css`
   animation-delay: ${props => props.delay || '0s'};
   animation-direction: ${props => props.direction || null};
   animation-duration: ${props => props.duration || '1s'};
   animation-fill-mode: ${props => props.fillMode || null};
   animation-iteration-count: ${props =>props.count || '1'};
   animation-name: ${props => props.name || 'fadeIn'};
   animation-timing-function: ${props => props.timing || 'ease-in-out'};
`
export const cssHideFromProps = breakpoint => css`
   @media (max-width: ${breakpoint}px){
      display: none;
   }
`
export default {
   cssHideFromProps,
   cssAnimatedProps
}