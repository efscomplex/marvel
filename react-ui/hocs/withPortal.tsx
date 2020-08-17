import React, {useState, useEffect, FC } from 'react'
import ReactDOM from 'react-dom'

interface Options {
   portal?: any
   slot?: string,
   tag?: string,
}
type  DOMElement = HTMLElement | null

export default function withPortal(
   Comp: FC, 
   {portal='root', slot='prepend', tag='div'}: Options
){

   const WrapedComponent = ({host = portal, ...props}) => {
      const [
         wrapper, 
         setWrapper
      ]  = useState<DOMElement>(null)

      useEffect(
         () => {
            let root: DOMElement = (typeof host === 'string')
               ? document.getElementById(host) 
               : host

            if ( root ) { 
               const wrap = insertNewElement(root, tag, slot)
               setWrapper(wrap) 
            }
         }, 
         [host]
      )

      return wrapper 
         ? ReactDOM.createPortal(<Comp {...props}/>, wrapper)
         : null
  }

  return WrapedComponent
}

function insertNewElement(root: HTMLElement, tag: string, slot: string ){
   const wrap 
      = document.createElement(tag)

   slot === 'prepend'
      ? root.prepend(wrap)
      : root.appendChild(wrap)
   
   return wrap
}