import React from 'react'

export default function Btn({label, children, ...props}) {
   
   return (
      <button {...props}>
         {label || children}
      </button>
   );
}
