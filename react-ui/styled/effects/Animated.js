import React, { useState } from 'react'
import styled from 'styled-components'
import { cssAnimatedProps } from '../mixins'
import 'styled-components/macro'

export default function Animation(props){
   const [
      cssAnimation,
      setCssAnimation ] = useState(null)

   const cleanCssAnimation =
      () => setCssAnimation(`animation: none`)

   return (
      <Animated 
         onAnimationEnd={cleanCssAnimation} 
         css={cssAnimation} {...props}/>
   )
}

const Animated = styled.div.attrs(
   props => ({
      name: props.name || 'fadeIn',
      duration: props.duration || 'var(--animate-duration, 0.6s)',
      delay: props.delay || '0s',
      direction: props.direction || 'normal',
      fillMode: props.fillMode || 'none',
      timing: props.timing || 'ease',
      count: props.count || 'var(--animate-repeat, 1)',
   })
)`
   ${cssAnimatedProps}
`