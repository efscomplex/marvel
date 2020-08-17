import React from 'react'

export default function({as='div', obj, use, attrs, ...props}){
   const Use = use
   let values = Object.values(obj)
   let children = values.map(
      (Comp, i) => {
         return Use 
            ? <Use key={i}><Comp {...props}/></Use>
            : <Comp key={i} {...props}/>
      }
   )
   return React.createElement(as, attrs , children)
}
