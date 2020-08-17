import React from 'react'
import useSlots from 'react-ui/hooks/useSlots'
import Link from 'react-ui/components/base/links/Link'
import getIcons from 'react-ui/resources/react-icons'

const { fa: { UserLock, UserAlt } } = getIcons()

export default function Login(
   { logged, onClick, children, ...props }
) {

   const { Slot, childs } = useSlots(children)

   const Icon = logged 
      ? <UserAlt size='30' color='gray' />
      : <UserLock size='30' color='gray' />

   return (
      <div {...props}>
         <Link onClick={onClick}>
            <Slot name="action">
               {Icon}
            </Slot>
         </Link>
         { childs }
      </div>
   )
}