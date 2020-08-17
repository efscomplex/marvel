import React from 'react'
import { NavLink } from 'react-router-dom'

import FlexBox from 'react-ui/components/layout/flexbox'
import LinkItem from 'react-ui/components/base/links/LinkItem'

export default function Nav({
   as = 'nav',
   routes,
   append,
   router = true,
   activeClass = 'active',
   children,
   ...props
}) {
   if (!routes && !children) return null

   const link = (href, label) =>
      router ? (
         <NavLink
            to={href || '/'}
            className='nav-link'
            activeClassName={activeClass}
         >
            {label}
         </NavLink>
      ) : (
         <LinkItem label={label} href={href} />
      )

   const MapT = (items) => {
      return items.map((item, i) => (
         <li key={i}>
            {link(item.href, item.label)}
         </li>
      ))
   }

   return (
      <FlexBox as='nav' align='center' {...props}>
         {!append && children}
         {MapT(routes || [])}
         {append && children}
      </FlexBox>
   )
}
