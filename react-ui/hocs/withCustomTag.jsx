import React from 'src/react-ui/hocs/react'
import useTag from 'src/react-ui/hocs/hooks'

export default function withCustomTag(Comp, tag) {
   
   const Wrap 
      = React.createElement(el, props, children)
   
   return ({children, ...props}) => 
      <Wrap>
         <Comp {...props}>
            {children}
         </Comp>
      </Wrap>
}