import React from 'react'
import styled from 'styled-components'
import uniqid from 'uniqid'

const Li = ({children, ...props}) => (
   <li {...props}>
      {children}
   </li>
)

function List({comp=Li, items, props, children, ...rest}){
   let Comp = comp
   let childs = children

   if (!items) {
      return React.createElement('ul', rest, childs)
   } else {
      childs = items.map(
         item => <Comp key={uniqid()} {...props}>{item}</Comp>
      ) 
   }
   
   return (
      <ul {...rest}>
         {childs}
         {children}
      </ul>
   )
}

export default styled(List)`
   display: flex;
   padding: 0;
   flex-direction: column;
   justify-content: flex-start;
   text-align: left;
   list-style-type: ${ props => props.type};
   list-style-position: ${ props => props.position || 'inside'};
   list-style: ${ props => props.$style};
`