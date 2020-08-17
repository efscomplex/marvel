import React, {useLayoutEffect, useState, createRef} from 'react'
import css from 'styled-jsx/css'

//const large = '992px'
const medium = '768px'

export default function withMediaVisibility(Comp){
   return ({mediaStyle, to, children, breakpoint=medium, ...props}) => {
      const elRef = createRef(null)
      const [ tag, setTag ] = useState('div')

      let {className, styles} = mediaStyle 
         ? css.resolve`${mediaStyle}`
         : getVisibilityStyles(tag, breakpoint, to)

      useLayoutEffect(
         () => setTag(elRef.current?.tagName),
         [elRef]
      )

      className= `${props.className || ''} ${className}` 
      
      return (
         <Comp ref={elRef} className={className.trim()} {...props}>
            {children}
            {styles}
         </Comp>
      )
   }
}

function getVisibilityStyles(tag, breakpoint, to){
   return css.resolve`
      @media screen and (min-width:${breakpoint}){
         nav { ${!!to ? 'display: initial' : 'display: none'} }
      }` 
}