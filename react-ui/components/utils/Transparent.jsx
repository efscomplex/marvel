import React from 'react'
import useSlots from 'react-ui/hooks/useSlots'

export default function Transparent({append, prepend, children}){
   const {
      Slot } = useSlots(children)

   return (
      <>
         <Slot name="prepend">
            {prepend}
         </Slot>
         <Slot name="default"/>
         <Slot name="append">
            {append}
         </Slot>
      </>
   )
}