import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export default function NextLink(
   {to, href= '/', children, label,  ...props}
) {
   return <Link href={to || href}>
      <Anchor {...props}>
         {children || label}
      </Anchor>
   </Link>
}
const Anchor = styled.a`
   cursor: pointer;
`