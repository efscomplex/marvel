import React from 'react'

export default function Link({as='a',href, to, label, children, style,  rest}){
   const props = {
      href: href || to,
      rel: "noopener noreferrer",
      target: "_blank",
      style: {...style, cursor: 'pointer'}
   }
   return React.createElement(as, {...props, ...rest}, label || children )
}