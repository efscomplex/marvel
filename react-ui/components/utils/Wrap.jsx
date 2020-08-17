import React from 'react'

export default function Wrap({as='div', children, ...props}){
   return React.createElement(as, props, children)
}