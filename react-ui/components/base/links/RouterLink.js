import React from 'react'
import { NavLink } from 'react-router-dom'

export default function RouterLink(
   { as = "li", activeClassName="active", to, ...props }
){
   
   const children
      = <NavLink to={to} activeClassName={activeClassName} {...props}/>

   return React.createElement(as, props , children)
}