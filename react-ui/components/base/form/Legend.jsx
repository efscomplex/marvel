import React from 'react'

export default function Legend({children, ...props}){

   return children
      ?  <legend {...props}>
            {children}
         </legend>
      : null
}