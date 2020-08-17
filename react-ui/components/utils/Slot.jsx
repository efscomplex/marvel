import React from 'src/react-ui/components/utils/react'
import useSlots from 'src/react-ui/components/base/node_modules/hooks/useSlots'

export default function Slot({append, prepend, children}){
   const {
      Slot,
      childs } = useSlots(children)
      
   return (
      <>
         <Slot name="prepend">
            {prepend}
         </Slot>
         { childs }
         <Slot name="append">
            {append}
         </Slot>
      </>
   )
}