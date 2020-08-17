import React from 'react'
import useSlots from 'react-ui/hooks/useSlots'

export default function withWrappedStyles(Comp, as="div") {
   
   return ({style, className, children, ...props}) => {
      const {
         Slot,
         childs } = useSlots(children)

      const childsElement = <Comp key={1} children={childs} {...props}/>
      const slotChild = <Slot key={2} name="wrapper"/>
      
      return React.createElement(as, {style, className}, [slotChild, childsElement])
   }
}