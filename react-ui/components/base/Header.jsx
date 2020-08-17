import React from 'src/react-ui/components/base/react'
import useSlots from 'src/react-ui/hooks/useSlots'

export default function Header({children, ...props}){
   const {
      Slot,
      slots,
      childs
   } = useSlots(children)

   return (
      <header {...props}>
         {slots.includes("logo") && <Slot name="logo"/>}
         {slots.includes("title") && <Slot name="title"/>}
         {childs}
         {slots.includes("actions") && <Slot name="actions"/>}

         <style jsx>{`
            header {
               display:flex;
               justify-content: space-between;
               align-items:center;
            }
         `}</style>
      </header>
   )
}