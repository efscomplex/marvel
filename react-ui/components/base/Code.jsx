import React from 'react'
import styled from 'styled-components'

export default function( {children, dark, as='pre', ...props} ){

   const reactEl = <Code>{children}</Code>

   return React.createElement(StyledCode, props, reactEl)
}

const StyledCode = styled.code`
   padding: 1rem 1.6rem;
   border-radius: 6px;
   transition: background-color ease 0.2s, color ease 0.2s;
`
const Code = styled.code`
   overflow: initial;
   margin: 0;
`