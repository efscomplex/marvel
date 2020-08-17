import React from 'react'
import Legend from './Legend'

export default function Fieldset({legend, children, ...props}){

   return (
      <fieldset {...props}>
         <Legend> {legend} </Legend>
         {children}
      </fieldset>
   )
}