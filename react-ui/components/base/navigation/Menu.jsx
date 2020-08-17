import React from 'react'
import getIcon from 'react-ui/resources/react-icons'

export default function Menu({name='Menu', ...props}){
   const Menu = getIcon(name)
   
   return (
      <Menu size="30" {...props} style={{cursor:'pointer'}}/>
   )
}