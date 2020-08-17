import React from 'react'
import uniqid from 'uniqid'
import Transparent from './Transparent'

export default function Map({
   as,
   from = [],
   template: Component,
   content,
   children,
   props,
   ...rest
}) {
   const items = [...from]
   if (items.length < 1) return null
   if (!Component) Component = Transparent

   const childs = items.map((item) => (
      <Component key={uniqid()} {...item} {...rest}>
         {(content && item[content]) || item}
         {children}
      </Component>
   ))

   if (as) return React.createElement(as, props, childs)
   return childs
}
