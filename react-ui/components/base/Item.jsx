import React from 'react'
import styled from 'styled-components'

export default ({label, children, ...props}) => {
   
   return (
      <Item {...props}>
         {children}
         <div className='label'>{
            typeof label === 'string'
               ? <span>{label}</span>
               : label
         }</div>
      </Item>
   )
}


const Item = styled.div`
   display: flex;
   align-items: flex-end;

   .label {
      display: inline-block;
      margin-left: .8rem;
   }
`
